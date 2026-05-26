// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qgPvHaMj1kcSdo+YbJMVOohuMdcmFvmgiT1R8CBB3lH3Ag1ktkBW7wHiDvfmDILvsNmO5c5TvQyZUQTL6y86O782qu4SxgwEDsx+e21hKPoAsMnhgf7xh6GmY/5mDj5v7OgMOSiAVGV8iHrrqNOJR1r/oVsrWAVJIr1w1gUWD/rZuOxmZwa5Ll/caqcL8RDomerh46YDo7IU8G1pCA2FI5l9ZVCAVLAzP/UkajpenUYG+DVQzX3BLeN8bnWppNulmiqv3fUhxsKzPGWBSsy58ZMImQg3i3cIDnb8x5cvjjUvOeg0GpZKrwkyi8+s4i29BofMmDU3d6QeTXfJXWzoCdZAek0vdUwG602k17E7otnvdhBwvl9sUKzoVcpCZstuEopF/AwkUQXKUxEWbZSdlq4z6127dDwR3UCPPP2p6IaBLlhqeMzNsCWSKvjIWi0G7NpYsDAsE7ZRabQfitx0G57FLJ51QvsxWTC67/AHCuia/Jv9EszZqsN2XmoW86nhASh8G5kyLUz64MpyHTiB4o3uyDXkEhqF6lZQ7AfyqIvykpUjjPjIthRbkwhK57Xsxk3+0II0kgT8RumW/xhZtQgs6T10h1oOn80mP84YF9crcP2P9cJrgpMVq0mEoGOHO5OkO8HP8qxl8KcA2BsdmwSaYYmtYrqa2XrxjboD8AxVPcXazcOB/kD4GqBAGtfes4DU9g23DyZeL6Kcasb+xZGslqHZplFnDNW0yU/w9CAwu68PXKI0j7xfEwKXZUVPL0E8iIqjJvnllKVBw0AAT+tVcBzQmyA2wx3MHF17MAyDIOfjcRLOfKf6fxsd+dGMCdu4CE7nLUlr3tKiKqjNgwuH9pQBJE3gdGqhHJl7s911Kkl+uvJsQwbF8zznR5uEjiJJ79EXlAzfTt6ZbWmOOspkhZjzCvOaf9W7ZfYxRZRar+vPzFzvk1khOq88wgFiBoh2QM4dA1XmKAFz7/b8OSEHj9RMIEBivoOul+QVcviN4731KHngJUQt1ayuaOXNlhCaM7vIO05e2y6dPeIbg7WCkQSyxmCUxB/qq4Hu30opHOWw/7VsVV7zxaD9wNGi9nIebaxfGbkm381XucN016lspLt4zGLKQIADmEiJO/WZ2u1JpIXvL+e07SUm6Wo2b+TEtWKFYKznxS33xBk4id3TN00sHzUulZWavzb651gXo8szOUo0raKM+rACtR25KFI5nMF+e3LewJfDLDNANeqZiGzqaPwtmUDjbWgot2IHpas6IIOp7VFgVc5AKpIRO4bnG+c1Yz9BSrm8dMA6745v2tx1C2PCAklDLMXJS5oFAFqSFXqNjkHZnesAQvyE1YEuvBkEUJZKjuEDZuLXyoGVH2lKHsMU1GTxpPhLP0o6/DnJP/coFKWwEMV9niL/NihnbnIZ8I6ZTqMnfGQmdW5/I2iY9VrPMxBsW5XBAHtxtJTNl/wfVHClY7t9UBjEvjFjidvxRcT8yDU/Pf+Mj9EaKjKT3BlcYkZ+x7uqjd4MtdUURmSs5YDJ1x78s/IY0QuMyPaEGPdRozhT5pb52NZHEdLazn4P4Ht864d7wUAewxOjIFIQGiS2vvTJs6BM8MYzmtqdezWbIEMJYohBvvhYrttOZEl4t8hzrgxHRgOc1yZ3RbOMndJSs937NlEaJbuYKmvjdCkMEw==';const _IH='42b6967cc834dc6efff32865596f2d3ea1cee15596591200410c395708c51ec1';let _src;

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
