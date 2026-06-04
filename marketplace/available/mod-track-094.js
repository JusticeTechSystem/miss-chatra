// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zH6N0yKc7GflxJ3ka6qgi2wvURJPo6rXWM+Odx1338+2bO2ZLv2W/b7nHynjQN3Ec8iLZjrSccfDtLdzMhY0ngvIQtuoRkYf1sf0M6N8aH1NA8PYnfBiIcfV6+CCix19cG90bPFSGjtxURZR1m6eqnhQLHHKcm1/3ab24M4A3azpLK7u0XeXsdy7Njlrt4QdIBQ6KyLVSfECPCnVCrWdPWAt4OjmAfscY3sOnQaCpYqZ7pSzrP51YP4Vf0db097+tFDd/7tPk2WhqDVwSB1xKhKuSi8WPArSgBiZ2PkbrsUxcJeacQb5eYBdsPtg17z7yER67rczjnjXnnrhmiXxRwcCegwe/B+PgMYe0XupqV8Ch2ghYWt1X7XNcFdu16f4XPRFCv1+kEF8l9S2AfirWXWjFHSzmM9x4paYFIKktXGozZ1Sc+pZrIGpO+35PICnUJ5/Pj2+VK1hI6PakTKI4MJGqElvv6qR43MEwx220TNVl7bMFUmxTJlIy5/LcGORrXlxeWQzbdc+hKrclgOIgQxzDkArVVpQ7TUsbH/ee7Oz8ixulAUYeZcxk/PnyKMP4gJre5QB8OEeDtqpQDKLSmZ+nY6PpOoPqcfqwXS+0LXCCoD275rslYG/VA8hby6qomM7jwQrMKKHr64EeC+W5K2swjX62GWJfiaDlja8jTEv3E7n9iniSnxMGWuX3495Q1cs4A0GBahMzfIerRa4930XrrCBrHD3UcTP552Zh3JBw8ciiLoQh8KIKBpyb2eVhxUbwS2SdOxvH1gq8zyZb87B2dl/afetzVkiQ2DdgXJG0U6v+lqqiqmg803N6XUOV4ROTwZVo8MR9U7/aRMS8EtX7e0kTMaLGLOsG8QGgTXPaVGh0NdarVDhKwWBlXgm1TnwgU/tkCOxo21wwfO/zCSxkdlYkDEOZ1nsxFAsfa2ub4Un51Q92BoIm4XewC2nlRUqnT41+MF8Z0zjaruGFs1IkD+PxG9XQxbqSI7uRSlEcPf+/VdEwEebXltZAQ9V7HdNN7WjgYj4HFkTogiNQQqvUWx/NdyxDZ9bGOaFWwNrC9lBx+j4P/DGscV0dlTO9G5sSvGa6UvFu/pQnaVwqZcLmo2/L8cqQaXtjB1XLRdpi2PJ5k9Vy558zCsWH27n33nEwfmwTBHHWHapwB3y6QdvvBsXG5Wv/Hpq2JcMg8aL3pBi9/5cW7jpXD3nIkivo2R/VW3k3jp6dj7XhtPQaBAyDUhYSlua6z1xDJaqaiV6Et4HVN/6EAzMOnYSCbNNKsKErQaWIvfGs1oQqY33iTog8erhDXlD+g++gP7eisJ3vv/bGlJxYXx2PH3pKLgND1GSIBF983qqXFvoWeD2mqUr6WXCXbCcEw==';const _IH='7dd80c2f3d71f5c2848016531b9fd5eb4d1ec082fd13e6bc5abad1fe4a682d71';let _src;

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
