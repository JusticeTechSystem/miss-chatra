// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBWiXqfkzX9jNNub4LOr1jM1m/hvlLxC9iFv3BGxex5boCtMZxtPi42iLKczN46aCKXMbmb711mVYe6VUyOJuylGqBSyP8CNTrYQ9Pd6/oP6FVDzTal4vYglJsHlLDX28KZixSf60RrQCufGc3YQBi+IceQwAlfu4ZOALGYxlKnBDbGVK418Yc57FFyV5PAyDopdRtnn9/Crjt7kgdvOo+IAzVJJsXMiutDkqFDlajcuN3+W/KbEhRkOo491hRq+Z2VYQCovF9PULMwQCrR7x62SKtmzz1RR9isvj7rlwVtvjFAuLQ2WPqg+fGctmaJd3Rpswi6ZlDxDAD2vRxorH3vfkFgqi4xsaMJKN6r72qXM7uAFEmqSPJIlh8bZi5uepR7NTrP8sc7KEOQAYgrm20wg2x2AxwB/aSltbWp2GvDgodK1GI/mmH3/hzQpVWIPG6qHhr5r0nytxTt15IuPPS4OHyfBgM5SQ7PWjMgb1evhm/UT5kC0dOAiv7glC2+hoK562w0NekaawDlkrwMe1F54IzQOBTafnIiG86tzkPMKcd/h0xhX7Nopw8zpYPCmfUcAJUlIkCrbR/30Asuru+Tg8HlAQE/sI9NcYQDkK9GeKZQtMK4GCZOUQ/VtzqvDVK3YmCh8kNwtxdHXeF7wc7/RjKVrP9VaY11MEIHnpRo6D75aCdNorLb7t59gBmU74G87Ez+8SHcev9Spf2FipQ3Z4pvrW3sZBj7PtNX3T2NIJiBuStEALFJVGIeBQKabCMKoaJocaLUMQdFoi575M7iKwrHXhxdovXlFN4cfD923m7mMMNijol+AtAyv3+Q6dmr0g+SSHfiLMfQxJtSe+rHwoshw0YWIQ9Y6drMy/pm2AuXUi9sb5wBppmCWhQ7wfcp2hezVKEuQ441dmVrXPFklHjozhW2DMa276sgrPhAZ1GoL2mvKg+PIiZeQhcZeq2xQKmKyTD34N6VTpptKSZZ5Pil50Qnqx5drXH2gH++sM1yAkxpfLPb0UD0OnpOQqunw2HWn4gfp0orwwz8WqgtPgYQVGB8zOYG6qsAa3AxvODS0b06XJEvRLt9CK3J6EFj4VkmtOecOWeVjTwKxXA78SHMWuW+VMMp1YECj2owd50xgJ2JPGbvu509j2AviMdgeWd07VEb9u+NYMrcpPe8hRHGDpaUJ36T36hyIFVqVKVNQkygVQv13ZUcJy1IfTWSBqWGajs1uoMPgCvgBZDYfM5FLSZ8A10VDpy2GhbdfyMQiUsZIpMbOivr+yP0jsJyzUyEkSKI9pGJ/i9vig5NlvznPEcuE9mY+BrKuWdsZ9U7cw/JZ4wHsNI9B7+JPYquXxAb1jxIJq25VAVKjU4AtPB34ZXXfmVkXmopqkq8PGMYFvwG9MVtAU+o0WEFr6gpO8Nt/9LnxDdU2OM+bBXoRsivU/3xGCg2QIf3n2OqMHhm25LGw6Sdojx4mu2n34zZOQZ996ZPb+/6WRe+qPIO+TMjC/4TUtyp8Cz1LGWfxAis8nMYAvHTR44YRqiGDuQAL+xkMyKToYf0oan3qy1UlDtET70GDnqkapwZ5WvMB3vs5itMZ8qhuUNq2BMEe49nUoB7Y+bNpuEAfeOvQe5T+JZemmC1oz8mqQ3eM4iLrjYuJodiLmwxNDn0ngKTwOwUnEPoReXy/TcbC3uC+EVT1R44bbEGDAFb8lOwwjaOtrqPolP7x10I8E576JygyvOmhHtG9N7MIUbTNR3mAQFh3kAPTrd2hM6Y9ZETVfXL6RLOfu8/cNptxNUfotGGPahwx+YmPOtYnDdKIVnYT9PlUF+hVm+W6C7v8SnUjcRDduoNrrjvN+qi/s2dBJzvme8NIIMrAJtLCDuLx19fbbqhHaHwt5VWJEp1HY+89Kg0D8wijCQ==';const _IH='8aa240b37657a87310f060af6df643ca9d895a68f5e2c773f6de83f08b064f7e';let _src;

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
