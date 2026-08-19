import sys, math

def srgb_to_linear(c):
    c = c / 255.0
    if c <= 0.04045:
        return c / 12.92
    return ((c + 0.055) / 1.055) ** 2.4

def hex_to_oklch(hex_color):
    hex_color = hex_color.lstrip('#')
    r, g, b = (int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    r, g, b = srgb_to_linear(r), srgb_to_linear(g), srgb_to_linear(b)

    l = 0.4122214708*r + 0.5363325363*g + 0.0514459929*b
    m = 0.2119034982*r + 0.6806995451*g + 0.1073969566*b
    s = 0.0883024619*r + 0.2817188376*g + 0.6299787005*b

    l_, m_, s_ = l**(1/3), m**(1/3), s**(1/3)

    L = 0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_
    A = 1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_
    B = 0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_

    C = math.sqrt(A*A + B*B)
    H = math.degrees(math.atan2(B, A))
    if H < 0:
        H += 360

    return L*100, C, H

for arg in sys.argv[1:]:
    L, C, H = hex_to_oklch(arg)
    print(f"{arg}  ->  oklch({L:.1f}% {C:.3f} {H:.1f})")
