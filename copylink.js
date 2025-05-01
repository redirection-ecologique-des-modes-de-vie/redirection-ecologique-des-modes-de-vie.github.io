function fadeTo(element, toValue = 1, duration = 500) {
    // Store our element's current opacity (or default to 0 if null)
    const fromValue = parseFloat(element.style.opacity) || 0;

    // Mark the start time (in ms). We use this to calculate a ratio
    // over time that applied to our supplied duration argument
    const startTime = Date.now();

    // Determines time (ms) between each frame. Sometimes you may not
    // want a full 60 fps for performance reasons or aesthetic 
    const framerate = 1000 / 60; // 60fps

    // Store reference to interval (number) so we can clear it later
    let interval = setInterval(() => {
        const currentTime = Date.now();

        // This creates a normalized number between now vs when we
        // started and how far into our desired duration it goes
        const timeDiff = (currentTime - startTime) / duration;

        // Interpolate our values using the ratio from above
        const value = fromValue - (fromValue - toValue) * timeDiff;

        // If our ratio is >= 1, then we're done.. so stop processing
        if (timeDiff >= 1) {
            clearInterval(interval);
            interval = 0;
        }

        // Apply visual. Style attributes are strings.
        element.style.opacity = value.toString();
    }, framerate)
}


function copyLink(link, copy, copied) {
      var copyText = link.textContent
      navigator.clipboard.writeText(copyText)

      fadeTo(copy, 0, 250)

      copy.style.display = 'none'
      copied.style.display = 'inline-block'

      setTimeout(() => {
        fadeTo(copied, 1, 500);
      }, 250);

      setTimeout(() => {
        fadeTo(copied, 0, 500);
      }, 1500);
}
