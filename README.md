# Angular Async Cleanup Demo

## Overview

This project demonstrates how to safely handle asynchronous operations in Angular components using lifecycle hooks.

In real-world applications, components often trigger API calls or async processes. If a component is destroyed before the operation completes, failing to clean up can lead to unintended side effects or memory leaks.

This example shows how Angular handles such scenarios using the `ngOnDestroy` lifecycle hook.

---

## Problem

When a component initiates an asynchronous operation:

- The operation may complete after the component is destroyed
- This can lead to unexpected behavior or state updates
- Over time, it can cause memory leaks in larger applications

---

## Solution

Angular provides the `ngOnDestroy` lifecycle hook to perform cleanup when a component is destroyed.

By handling cleanup properly, we ensure:

- No unwanted updates after component destruction
- Better memory management
- More predictable UI behavior

---

## Implementation

A simple component triggers an async operation and logs cleanup during destruction.

Core logic:
<img width="458" height="126" alt="Screenshot 2026-04-15 at 20 49 05" src="https://github.com/user-attachments/assets/f8cca294-a7f5-441c-aecf-b96424642dce" />

---

## How to Run

1. Install dependencies  
2. Start the development server  

Run:

npm install  
ng serve  

The application will be available at:  
http://localhost:4200

---

## How to Test

1. Open the application in the browser  
2. Observe the loading state  
3. Refresh the page quickly or navigate away  
4. Open the browser console  

You should see the following log:

Component destroyed, cleaning up...

---

## Tech Stack

- Angular  
- TypeScript  

---

## Key Takeaway

Handling asynchronous cleanup is an important part of building stable frontend applications.

If components are destroyed before async operations complete, failing to handle cleanup can lead to unintended side effects and memory leaks.

Using lifecycle hooks like `ngOnDestroy` ensures that components clean up properly, resulting in more predictable and maintainable systems.
