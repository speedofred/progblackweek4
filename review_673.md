# Peer Review

https://speedofred.github.io/

## Summary

-   **Interest in Content** - Excellent

-   **Consitency and quality of visual presentation** - Good

-   **Quality of written presentation** - Sound

-   **Validity of HTML** - Very Good

-   **Evidence of collaboration** - Perfect

## Issues

When linking pages from the `index.html` file dont use `../` operator as this returns the parent of a directory, if file structure is embedded this doesn't work

```html
<a href="../Sam's Page/CSInMedicine.html"></a>
```

Instead use `./` single dot operator which returns the current directory

```html
<a href="../Sam's Page/CSInMedicine.html"></a>
```
