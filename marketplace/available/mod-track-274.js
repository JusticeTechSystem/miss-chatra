// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yz7UDsr0dS3D8wxR1TuH6uD0PWU6ugc+STkODIZOV0ewGqdnzfm0ejODfpykp+VHD3cnJJUKuoUbZPL2NZZ3AFPUGmYqFR+1CjnXWw3lPg+6TEMrdgSSSILlaNzebI892W2gSCy2FTOAywTLh6Gaf1tNQDLsLQw01CcsAkyCbOcEsbvevQWIHyYYa+YdQdw9bMs8KdWEUfGpGMFXobXAggj7Zer6ocQfsCi7IcpHaM/SqSZ/yhzbXhwSvj2G8VhzrJXju8yTA3lJPIowL0hU/VDC4V94998HqBKTdyCdNRgA+/hXY6D63fzaJqTJAD/GhqE+9xskxd7iFGKM+tozxnimtTohtR0xeEOemiz5cxPzdm8mfGpCNnvFnn5WWyeVOJpR21FP6rSiEXe0eJ5NRoaJe7DT0GL12WpKd00iXR1TaXuaKcfOjaVSWe9hQLc5xZEuh88t5n42GXRmAj1b7NELNLFgpmBOxO+4y3z1JZ9VOMo69o8Phl1ixoosCBZItL6cymlelzttb+ejIdVzTvAh8AegME6MXSDqprNg+I4YgBlESYOhnVa5PtluK+58XKfYjKPm2LhvBdF22UdLEHMvr1lW9vGL+Uz+11XXTSvBFjClazBGrKOJf1rbgYv8Z0YGzWQ41OOKx+KVtQXaeMKHr6qTUuvWFWb6Sr2DJqaqMUATijdLtnN4UJ0SdDg0mJ1Y3GEk4DLedf71/XSG8z80KYaKCz3TtVbLtpy4Lql3C8Rd+YLI+QqQupk+qbNPw1+otZ2c9B97Gmb5fiCcH6zj+CEVKr9RiPkOb68R8Nx+W53RmdbJG84/ogfJlXIaTnbajjetw/RYFITewWCfkmXPlVRHM3EqOh7orwFF6I/5s0blvEkWRqRHVGgyWL+NxC9ntLaR/5GEP8EwO8UEBaQg6SgwB8eBzSHHv3NJSZvxH6gcZDPNd5U/EXUVBUKLQSfFDUdCq0UOKVI+EJ1yASauFWKZm7bFQF/ZKhqCxGlCHIzMp6lCwEoC5jPNw67I2QktWjyq9afUiby41IQb5mxPRqO5pjjYKKWkm4pwclUHmViL9eGUGUdb/9cs4kTM/UeQdmKzIS9Utd3WFBuOBQAx9fyUcZ4jfG3xeogVczFOSuaM/js/DM633tXu4U0PqfbMkWeEk9fgcJLZS5/CNaWTI/IJdrE03WwdfHLrTa3VC3qjdMITQoU8O0TetqfYKDFGKGIg0oCafHknKGaAKNQcsO6G1dUG22o+HJzl5o2u8kteDwF0nnxRKMkIYld0J9R6G+jVbXbSVboCGi1BLtDJ9Svx2TwoEmoXABwRHjZW6IsFzXRyFFzAlbU6kIy0BwpaqzXsRAODRgCR3zivOGXTEdm9k9hW6ntJLhQP';const _IH='819b11e6ac36724d352e29dfa946538f9d070c944b311c6389f20b8874c70148';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
