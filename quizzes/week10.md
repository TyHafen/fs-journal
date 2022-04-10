# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```

It allows you to keep a set of names separate from another. If you had the same naming conventions into two different namespaces they wouldnt interact with each other.

```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```

A class is stored as a reference type while a struct is stored in a unique memory locations. Another difference is lasses have constructors while a struct  doesnt.

```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
Abstract void Method
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
public


```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
variable type

```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
Indicates whatever is being modified isnt complete for implementation 

```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```

Allows the class to be overridden by an inherited class

```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```

public, private, internal,  protected

```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
It can only be accessed by code in the same class or struct.

```