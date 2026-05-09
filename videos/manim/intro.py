"""Programmatic intro animation for Phithatsanan.github.io.

Render with:
    manim -qm intro.py Intro
Output (default): media/videos/intro/720p30/Intro.mp4
"""

from manim import (
    Scene,
    Text,
    Line,
    Dot,
    VGroup,
    Write,
    GrowFromCenter,
    FadeIn,
    FadeOut,
    Circle,
    Rotate,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    BLUE_C,
    BLUE_E,
    TEAL_C,
    PINK,
    WHITE,
    PI,
)


class Intro(Scene):
    """Six-second branded intro: name, underline, role, orbiting accents."""

    def construct(self):
        self.camera.background_color = "#0b0f1a"

        # --- Decorative orbit ring (subtle, top-right) -----------------
        orbit = Circle(radius=0.9, color=BLUE_C, stroke_width=2)
        orbit.set_stroke(opacity=0.45)
        orbit.shift(RIGHT * 5 + UP * 2.6)
        orbit_dot = Dot(color=TEAL_C).move_to(orbit.point_at_angle(0))

        # --- Title --------------------------------------------------------
        title = Text(
            "Phithatsanan",
            font_size=88,
            weight="BOLD",
        )
        title.set_color_by_gradient(BLUE_E, TEAL_C, PINK)
        title.shift(UP * 0.6)

        # --- Underline ----------------------------------------------------
        underline = Line(
            start=LEFT * 3.2,
            end=RIGHT * 3.2,
            stroke_width=4,
        )
        underline.set_color_by_gradient(BLUE_E, TEAL_C, PINK)
        underline.next_to(title, DOWN, buff=0.35)

        # --- Subtitle ------------------------------------------------------
        subtitle = Text(
            "Application Analyst  ·  Admin Support",
            font_size=30,
            color=WHITE,
        )
        subtitle.set_opacity(0.92)
        subtitle.next_to(underline, DOWN, buff=0.45)

        # --- Tagline -------------------------------------------------------
        tagline = Text(
            "CHANWANICH   ·   KMUTT ALUMNUS",
            font_size=22,
            color="#cbd5e1",
        )
        tagline.set_opacity(0.85)
        tagline.next_to(subtitle, DOWN, buff=0.5)

        # --- Animation sequence ------------------------------------------
        self.play(FadeIn(orbit), FadeIn(orbit_dot), run_time=0.6)
        self.play(Write(title), run_time=1.4)
        self.play(GrowFromCenter(underline), run_time=0.7)
        self.play(FadeIn(subtitle, shift=UP * 0.25), run_time=0.9)
        self.play(FadeIn(tagline, shift=UP * 0.2), run_time=0.8)

        # Slow continuous orbit rotation while everything sits on screen
        self.play(
            Rotate(VGroup(orbit, orbit_dot), angle=2 * PI, about_point=orbit.get_center()),
            run_time=2.4,
        )

        self.wait(0.4)
        self.play(
            FadeOut(VGroup(title, underline, subtitle, tagline, orbit, orbit_dot)),
            run_time=0.7,
        )
