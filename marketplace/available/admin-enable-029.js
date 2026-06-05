// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vmm2VTZ6SyJrNvLEK1GUCO90yWPXoNx63WwmabcIGv4KO6EZWpBIhTd4FYHb+nX4cFVX6vbD0RRdDONMy0rk6j33f9w8BuFBz6/0M8kg9Xx0eQ09xrEXYOCXJAiRcm9G/P2P0SE8+z3wAgAXD/MnS6Mwq8PrdjOqBMiQpr0BSL7Dwc7XFvu125mg+WDSq/QYhGICUDn/aP5gsh9hg1C0NmXKGL9YVBr+KkXleboVszlyPi1pKe7H3GBPvjlKtW4DRCQnft/dyQjRrNhvtlaIf6RolrukgqMFwWg7wnGKaeqLF5Ml6lE0XEm/uwyopJaWlnfALqGvZQkhFMndka3M+SRU+9qNqlOR3Wzam0Uk89mBdJo/eWlkNuIQhEioWTd85xYliTG3NgFZK5/N6Du5AXLrqbyiJyQUCBtQk4C1jTYHt9isUqOObNVzzSE3VnGYFMQNLMRSQF3WfaDAAZj/Ua0UzJ+ujVugJV8oPDXfmyZjfevGstnxoIxbKycGWJWmOjhELgEO/mJN8ezYsayp5BvNPFHk2x6quJZuq+oEwhL3/V20j3yklCtq52j9MW3+584QhgqZcA3imZy8WJAxMsi8FXSwS+wy+GXJGnCmDsObhNrqSnSVtyjo6Z4f4jVXM+m4U+I1BqG0qyKPvfcoLV5qCr0riqX2/mibMr9qDwkfTHlhqXuYTDjh6dhWHcAZV8sky6r581YXWJ5QHDetHkPwh8jnMh3NkGNOT1hZD5T2b3/vQZVToEqpo3crKsM7CoX1ZQUUfmBtGhX4kHsEB6uqE3bWwFQSjhohSIg5pM0ZiHLsIp/aFFd6gYBMiwnuFCBJSXLqDZB6b29TbuVWFlwcMQgqF3+ktIWPEsHmo1+HcKahODyKLH9qryh3DOHPR+MjC6+UXfGUalQZ97xWI/xhobccVFT9Bv6JWaH3eZIW4w4S/Jvw9UBurF8+z6Mx3XytEQ7EJZ+fI9ul0EerZDppzhjzcjswcCs0azBEx3Ugk8ZjdQQ52HkK94Zt';const _IH='2064bb927f62cc39f9a10c19a72e8f3c4816b64515b1b4b07a33c610dcccbcf7';let _src;

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
