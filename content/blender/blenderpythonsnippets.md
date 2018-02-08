+++
date = "2018-02-07T16:07:52-06:00"
draft = false
title = "Blender Useful Python Snippets"
categories = ["blender"]
weight = 998
+++

Export all Mesh Items as an OBJ file

{{< highlight python >}}
import bpy
import os

# get the path where the blend file is located
basedir = bpy.path.abspath('//')

# deselect all objects
bpy.ops.object.select_all(action='DESELECT')    

# loop through all the objects in the scene
scene = bpy.context.scene
for ob in scene.objects:
    # make the current object active and select it
    scene.objects.active = ob
    ob.select = True

    # make sure that we only export meshes
    if ob.type == 'MESH':
        # export the currently selected object to its own file based on its name
        bpy.ops.export_scene.obj(
                filepath=os.path.join(basedir, ob.name + '.obj'),
                use_selection=True,
                )
    # deselect the object and move on to another if any more are left
    ob.select = False

{{< /highlight >}}

Hide or Show all Objects

{{< highlight python >}}
import bpy


def show_or_hide():
    
    # deselect all of the objects
    bpy.ops.object.select_all(action='DESELECT')


    # loop all scene objects    
    for obj in bpy.context.scene.objects:
        
        # get the meshes
        if obj.type=="MESH":
            
            obj.hide = False
            
show_or_hide()
{{< /highlight >}}

Move Origin of All Objects to 3D Cursor

{{< highlight python >}}
import bpy


def origin_to_center():
    
    # deselect all of the objects
    bpy.ops.object.select_all(action='DESELECT')


    # loop all scene objects    
    for obj in bpy.context.scene.objects:
        
        # get the meshes
        if obj.type=="MESH":
            
            print(obj)
            
            # select / reset origin / deselect
            obj.select = True
            bpy.ops.object.origin_set(type='ORIGIN_CURSOR')
            obj.select = False
            
origin_to_center()
{{< /highlight >}}

Import OBJ Files from a Folder 
{{< highlight python >}}
import os
import bpy

# put the location to the folder where the objs are located here in this fashion
# this line will only work on windows ie C:\objects
path_to_obj_dir = os.path.join('C:\\', 'Models')

# get list of all files in directory
file_list = sorted(os.listdir(path_to_obj_dir))

# get a list of files ending in 'obj'
obj_list = [item for item in file_list if item.endswith('.obj')]

# loop through the strings in obj_list and add the files to the scene
for item in obj_list:
    path_to_file = os.path.join(path_to_obj_dir, item)
    bpy.ops.import_scene.obj(filepath = path_to_file)
{{< /highlight >}}