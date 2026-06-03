// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e78ODqVWga4sDaP2awAldrqWeGSnS4NQqDYUWel5l2TeMJB+sxFjBvfFdjRBmecb6k+vFXWLEn4faVHSpZQCZ31zkxY8Y30zLvn2vo81D8M6Mq0DijadupXiTQShU4dD0FS6aHnfkH0tAwzDAxu+1DvYOi942ZrDUpfljeYBn8RGw/qHaO12DlBrJabTqfjIWR6AmJpx5iKYLDbAfEdH5Ml55uDbsfbQxG2xZ640y30GFtnQd+jupms3qwc4TS6RN5YTXb3dY4a1SDS1xxJoLZThU1DZcbauKHOQR1N8VJ/LDmvDI0nVhcACanNVkkMt6PRNrT3FgaDTsIch6fo6Fvrni43ZgBL6+0tmews5e8ZrtZhnrYCw58gCa5uj1fNhnibb6yJB+oDMU3QrFlhJIEsFYSB/QmANu/r6BxQHdqfOq1Gvb3i3b9KbEtV/9aSyV++1i4u0K8Kw2r2jx3HO8vaOfx9JPQfnI8G7CiF7Tk4kfndLn19/cS4PaTqNDUTu9tHcUFsNmHJMaqwD06xtCXn0XJ+4759ikBSLJC1hcEr4kHXuX4oEXJjT6fYlqCI9fzJozc+5QDDg/NFXrK++wHMW/YVKUmCTv6RoyNRGoPo/yIFOqQGjLftVby19K7gf5h0Xeg45duTwE49XFCFYnFnaL6WVu5HHfawr2VloVt/wByT6zlkd69PUbNXZIuZID6WjFrxi22ozKbfVM6eRc2aZFh0ZqWHVyKJjxHgXNtLC0WIJhbTr8GQYCXMNr610uPiroXhNKX2LU9qQ6EQG1WojnV0h5YgUPOm/4DiELKq24kms6i+9o2QhoXPQKMuVsLgyebhI7RGREV14M9wZgRT4y0hLKGofeyy5kb4Cn2VCrbRsBA+ssv7wimQN2L10WirUWnIR6RCnzFgkqCFG8PFOgj5dTIsPa1ZBoEtgHXbyhyLq9DLI3Q8XgvCMC4YkMIn4kl6R+uJrV2KpXKv43xIA8RPN9lufMSGtQUgXixDbqa748Z7P0q0n';const _IH='5d25e14432da5e4923b386666c01241e6d95e0e522a9f5db40a56df679498158';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
