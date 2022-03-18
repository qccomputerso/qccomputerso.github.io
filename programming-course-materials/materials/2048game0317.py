import pygame
from random import randint, choices
from typing import Callable, Iterable, Set, Tuple

WIN_WIDTH = WIN_HEIGHT = 400
PADDING = 10
BLOCK_WIDTH = (WIN_WIDTH/2 - PADDING*2.5)
PADDING_COLOR = "black"
EMPTY_COLOR = "grey"
TILE_COLOR = {
    2: (124, 252, 0),
    4: (50, 215, 50),
    8: (34, 139, 34),
    16: (32, 178, 170),
    32: (0, 191, 255),
    64: (0, 0, 255),
    128: (0, 0, 128),
    256: (138, 43, 226),
    512: (75, 0, 130),
    1024: (0, 65, 63),
    2048: (23, 194, 46)
}
OTHER_COLOR = (0, 0, 0)
pygame.init()
fontD1 = pygame.font.SysFont("Comic Sans MS", 80)
fontD2 = pygame.font.SysFont("Comic Sans MS", 60)
fontD3 = pygame.font.SysFont("Comic Sans MS", 40)
fontD4 = pygame.font.SysFont("Comic Sans MS", 30)
fontD5 = pygame.font.SysFont("Comic Sans MS", 25)
rendered_text = {
    2: fontD1.render('2', True, "black"),
    4: fontD1.render('4', True, "black"),
    8: fontD1.render('8', True, "black"),
    16: fontD2.render('16', True, "white"),
    32: fontD2.render('32', True, "white"),
    64: fontD2.render('64', True, "white"),
    128: fontD3.render('128', True, "white"),
    256: fontD3.render('256', True, "white"),
    512: fontD3.render('512', True, "white"),
    1024: fontD4.render('1024', True, "white"),
    2048: fontD4.render('2048', True, "white"),
    4096: fontD4.render('4096', True, "white"),
    8192: fontD4.render('8192', True, "white"),
    16384: fontD5.render('16384', True, "white"),
    32768: fontD5.render('32768', True, "white")
}
RENDERED_TEXT_INFO = {}
for num in rendered_text:
    t = rendered_text[num]
    RENDERED_TEXT_INFO[num] = (t, (BLOCK_WIDTH - t.get_width())/2)


V_UP = (0, -1)
V_DOWN = (0, 1)
V_LEFT = (-1, 0)
V_RIGHT = (1, 0)


time_last = 0
dt = 0
anims = set()
TRANSITION_SPEED = 2000

class Block():
    def __init__(self, num, pos):
        self.num = num
        self.pos = pos
        self.anim = Animation(self.draw, pos)

    def draw(self, x, y):
        color = TILE_COLOR[self.num] if self.num in TILE_COLOR else OTHER_COLOR
        text, px, py = RENDERED_TEXT_INFO[self.num]
        pygame.draw.rect(window, color, (x, y, BLOCK_WIDTH, BLOCK_WIDTH))
        window.blit(text, (x + px, y + py))

class Animation:
    def __init__(self, render:Callable, pos:Iterable[int]):
        self.render = render
        self.active = False
        self.pos = pos

    def start(self, orig, dest, vector, callback:Callable = lambda b: None):
        if not self.active:
            self.x, self.y = self.pos
            self.dx, self.dy = self.vector = vector
        self.dest = dest
        self.callback = callback
        self.active = True

    def update(self):
        if not self.active: return False
        self.x += self.dx * TRANSITION_SPEED * dt 
        self.y += self.dy * TRANSITION_SPEED * dt
        self.render(self.x, self.y)

        if isinstance(self.dest, Block):
            if self.dest.anim.active:
                destX, destY = self.dest.anim.dest
            else: 
                destX, destY = self.dest.anim.pos
        else:
            destX, destY = self.dest

        if (self.vector == V_UP and self.y <= destY) or \
            (self.vector == V_DOWN and self.y >= destY) or \
            (self.vector == V_LEFT and self.x <= destX) or \
            (self.vector == V_RIGHT and self.x >= destX):
            self.active = False
            self.x, self.y = self.pos = destX, destY
            self.callback(self)
            return False
        return True

def add_block():
    if randint(1,10) == 1:
        num = 4
    else:
        num = 2
    x,y = randint(0,3), randint(0,3)
    while grid[x][y] != None:
        x,y = randint(0,3), randint(0,3)
    grid[x][y] = Block(num,
                        (
                            PADDING + (BLOCK_WIDTH + PADDING) * x,
                            PADDING + (BLOCK_WIDTH + PADDING) * y
                        ))

def draw():
    global accept_input, score
    window.fill(PADDING_COLOR)
    for x, col in enumerate(grid):
        for y, cell in enumerate(col):
            pygame.draw.rect(window, EMPTY_COLOR, (
                                PADDING + (BLOCK_WIDTH + PADDING) * x,
                                PADDING + (BLOCK_WIDTH + PADDING) * y + 50,
                                BLOCK_WIDTH, BLOCK_WIDTH 
            ))
    if cell != None:
        cell.draw(
                    PADDING + (BLOCK_WIDTH + PADDING) * x,
                    PADDING + (BLOCK_WIDTH + PADDING) * y + 50
        )

    score_img = fontD4.render("Score: " +str(score), True, "white")
    window.bilt(score_img, (10, 10))
    if not accept_input:
        active = False
        for anim in anims:
            if anim.update():
                active = True
            
        if not active:
            accept_input = True

    pygame.display.update()

def move(vector):
    global accept_input, score
    accept_input = False

    dx, dy = vector
    count = 0
    moved = True
    to_merge_list = []
    while moved:
        moved = False
        for i in range(4):
            for j in range(4):










        
        

    


