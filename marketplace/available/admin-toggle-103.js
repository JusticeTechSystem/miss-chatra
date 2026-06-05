// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fWmBqHFIBD6fEOCJdUuuuwo2E7x4du3CEsqmLt9WC2PpORVXs9FPBuIQRsLEiZUrDwU5i3a86a/Rum0DpomZeJMXDzF1XzyNtISGJPlLl0lBDjaX+cVe+CGonbFb3Lo0bpd65O/HJQK1LzmGOYttrCs/8qH6oKdDB2DZC6j+WhCb/bYXRad9i+V9s/0oAZAqgh9WlI2SowYD5hlSBK9BsMbWHVzWmvWtriGmNtEBB3oUBOu9ZGamsItgG0qozLUjE3oiBKMAXe3axL16r9InEiGmEa5BR6GymlkzcW8XwuuEEdc5OZk5R8XtXIft3N6bPPQF/FFS1f4Q7A0eDEIs8mi9bH3DidrmvkqF9mNmcwh2VvbViUbcLgkrmxf8R3UG9CpMIbWM3UK+nazSv5C04Lw6rwYmOzLRjIOUhPHEigyu/VmUMPDjaypymiAJ+0EHh0R7CXwe6tEizyz6lKJ0l2aOrm0yIFuW5qYK0ck9au9KYmojcTPBo51zIqrnqNrjbmlzPOF+BE7Guz46yvSxW8i5ny/35azOTvgYrONAmvnNWOJY8j+fXJyMKXQABMHw7Lmo9+oNKH0G1W7V+fDjb0/wsyWMoWd4WECZGyG83nGh0VRkHc1LeHUgVAxrx6z2gy5gOhNOtEUuYuBjRvOeb1vi6vJnbRWlpeH88F8DJefUNh4DLewu5id+AAbb6ewzB+chGz/FT7gwC353KvE2QDXW70zoMnSaBzzLpM+OjU5P2bsJ9jpx8drUQxRoyOepMjl7UrnTRjttNwyioQJZrNQvZaY5wujsyh4XTOsMMAO+hoRGutWkf1BDETiyHz0dd+mCzMnil4MEdyi+aesmk+mw5OrzNPdTxd72VjpfTYPMOcxbc/dKb1XSWFKFGZ33RiMvItBCo+pQrzFa6kHY6V79+XmIlbsYlHtDBTfjg5Z1MgvGxlBGZqF56kzvI2R5n/cuevYfeVGhWM+uEiwQOozdY2Tkk8h1DRVHLlPfL2fdHjcNNExS6h1yBGf/WXlAEA==';const _IH='5d3ddef432ebeb0b4750a7e63ff4553bdb43477d76c8382d0b113d449f7f7c1e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
