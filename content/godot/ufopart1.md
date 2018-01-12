+++
date = "2018-01-11T16:07:52-06:00"
draft = false
title = "Catch the UFO Part 1"
categories = ["video game design", "godot"]
weight = 1000
+++

Code for Player.gd

{{< highlight python >}}
 
extends Area2D


var direction = Vector2()
var clicks = 0
var screen_size = Vector2()
var width = 0
var height = 0
var hit = false
var lose = false
export var speed = 100.0;

func _ready():
	screen_size = get_viewport_rect().size
	width = screen_size.x
	height = screen_size.y
	position = screen_size / 2
	direction.x = rand_range(-1, 1)
	direction.y = rand_range(-1, 1)
	direction = direction.normalized()

func _process(delta):
#	# Called every frame. Delta is time since last frame.
#	# Update game logic here.
	position += direction * speed * delta
	check_position()
	
func check_position():
	if position.x < 0:
		direction.x = -direction.x
	if position.x > width:
		direction.x = -direction.x
	if position.y < 0:
		direction.y = -direction.y
	if position.y > height:
		direction.y = -direction.y


func _on_UFO_input_event( viewport, event, shape_idx ):
	if lose == true:
		return
	if event is InputEventMouseButton \
    and event.button_index == BUTTON_LEFT \
    and event.pressed:
		direction.x = rand_range(-1, 1)
		direction.y = rand_range(-1, 1)
		position.x = rand_range(1, width -1)
		position.y = rand_range(1, height -1)
		direction = direction.normalized()
		speed += 5
		clicks += 1
		print("Clicked " + str(clicks))
		$hit.play()
		hit = true

{{< /highlight >}}