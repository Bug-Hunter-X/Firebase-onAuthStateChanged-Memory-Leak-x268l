# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener.  This can result in memory leaks and unexpected behavior, particularly in React or other component-based frameworks.

The `firebaseBug.js` file shows the problematic code where the unsubscribe function is never called. `firebaseBugSolution.js` demonstrates the correct way to handle the unsubscribe to prevent memory leaks.

## How to Reproduce

1. Clone this repository.
2. Install the necessary Firebase dependencies.
3. Run the code. Observe the console logs. Notice the continuous logging of the user's authentication status even after manually causing the app to unmount (if within a component lifecycle). 
4. Review the corrected version (`firebaseBugSolution.js`) to see how to avoid the memory leak.

## Solution

Always ensure you call the `unsubscribe()` function when the component unmounts or when the listener is no longer needed.  This prevents the listener from continuously firing and consuming resources.