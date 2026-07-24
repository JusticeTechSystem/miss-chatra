// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpwmVvamIDuU6iIDiMcAnQvU+GST8udVFXAKmsfd2jkgFlLGZpcZ/YLaAg70oNXP0BniGX4ttykoVVxb+Sh8JxGtU0+Ti72tUgwJx2u3UdwY1YXRnA1K67Gu7d2duVdELc1D5HBDD7kqHLX+trLoCi9+yJLUe/+lK/MX7z+9EvtWwRWsYf70RPE4TDdAFDO4FR/Xe6aTPgYuDIlPYIP3ZFzN62yOIXaAQeedrYNINLmUlIT4gvZ8I2RT8nD0PdZD+C+f5TujdIty0RloR2rqxNeczIP/0eeZ9Cgf7tjBTRECFZ83ZU6Yae6ifOL5B/vCdKw8VITVAZjhf9+86/H82KniwgerOg+AaSjHP79Q3GPkawrmb0lqt3+rQEcdqGSuOHOA8a799tQ0l4kImzoUs819uFowVu1JJvlAPa57iFEUfeyI4mZEIWwKwIQxTTpF8u4AJ54LIYR3UOB0ygs6y6GIK4U9AxLBPEIfmd+bGYDDRcMQVdcjJwjb0gGRuhQBU7AMWLxXBGFNzzjm9aHRFrqPeRvZBaI6h6hI6cBzt2mOhhUTx8cfr5VK9l9uPeDbHLjH7h93ZnVb6rKGtx1AdtNV9Z/6k3iU8uTTt0p1G7qPUhegan+GCoS4TeescgW2lr5JuNwDrVoqek2nA0kC7TlkohOqjbVJWOwmPK8/hhw5V/fr0Iah75VCkmIaOa1n66Y/ahAVCZYI0469huYob6TMV1I6wx6iAHKRyxtBqBc5lRvt6rjm/DVtEHW+WyVe7QG04BQ3GdVrq1RpSqjv1RqIwBWJgiNTZznUt+KR6pLCw0ZTGfS1zPOe7uAsmsBVQ7ytLxKkpbB6FoEwrIEQ+/G3nFjvag0eWJdyVEdIYWhRGna/Jv1xH5X/7mb8mdIMx9Ax/cdABq8cs3xKxiSQOvMtJ659g2H8jhljQAA/4Dbb11vwc7wEONJpXDYnNhLg0h3q0lCBH9B1qEj7/jGmdegBrLwXpt8DRoLVohDXjXx1VH5UNux/LDrKl3qVT8k9KAc6NRoGi8Hr7TpElvla/FVelhXYC48I0xbW3IWVQnzavZuxXQoUS8qrB4nkRncTQtISqa8VltZL5+GMCwxR0tt35DUyWwNGQKT15eSPY9Vuy14vXTWRkCJH1O7ZhBoYzJfJHcj4b7HvSl016tBnHsSX6aZPPTZDWC2FirnARpvJtp4qy0EK9pm1pRmMpbNK4mNa8QU0/J0LvyXwC9t99f9VimcYmtic1G1CHsXLkCg/i+9dPovnMzf0HyMHErFZ2hdRL4toxx4xUYxh4yagoA5zaONAakl/vSkyaHHTS/i6dHZ9tEyelHj06al2/6dS0vkaBk+4VUClW50h/FWGjSAHBaTEUxSnxf';const _IH='f12fa0090341200bf18ab6da4bfd60bcbcfb4f998be8501a48f472f7f9997f0b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
