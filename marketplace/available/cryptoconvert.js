// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThZB36TxDjF2Aesm1s+tzd2JggkcF7xTnSIII8fpeo+D2NEalzyps18dqUX3wkmG6DIoTNOM5wSiiYFLnZeDJcY1TXI3smNx9NGynbvojN9IST1mSrbkKQ4tkCmY59auDSJzW8HUh/FL8K84nmLtatvVS1eJVWltwN0RFeIf3Cudwm3BDM3CBeWrtw1cnR7qfht6iioRz8JjuzPFsOuZGly/XElS6fJXo75Ui7aGZhQ9P6Ep+8KWYNdX7ZAuOiH68WVIboSoU7+JoIL1cJP90kO3eZnnToIQ50LYmn2JSKQiCXBX9DDL4Tu9nE9z8NXwIgMCTD3WY6rqMVI4HM3KXlSKdGHDreVTloj6xR+Y228p3DAd4psyLniN8icEWNkXzKmo/B8mY1Qb1L+OTWiQGw0/jzujjPnt8GspC3K/nSjo6GPt4tlrnWz6Tthkup6p3+FqKyFjgE/5VYTAOXkVQcVskC08QIZWfq44TEVQsTkiqIktG+Bfux3rmVU4CiKJFnx4eTF+vc1PNmm01N5wKw9XHV413y8c27677Y4U6Q/tnx7c7MhjkDVaUzF8rD9G/RIMiatT3kiuxeUAtXt/HAcgklYweg9RV/c8O2oz1wJYo+XCaQXNYheidYEGkWNZC3hSTNDfaA1uDkQRSPAEcV/AGpua+1mTzPDqt0R9/46vmFdr0vqUpNRVavdfnsaWoYPocTZbx27vJ/EucuLGd1+I5++pWXdyqysvJqrfuAMCP9N4Py5H3e8jHY46JOYxc3ZAJQ1rnBnSblYM6rFAOk9/8K9nmmpNp5uwTTgUgPjmUF7/EiRlFwx5XXWk4/Y0F+1/vCZcypcMDV3+pIyQ2Ky0pzgSJkCGlGlvce/r4EdlEPDMzpyc+6OYUREP8znrzILcnMh4F+LjleinNWFvgqFVkCeX+Yk986F2Vjc9yRn4F/LlA/BMVaYQJytu2toEUx/8S37qpsEXr3+13xSQmcrmS+9ivIROo9vJyoQR//9KfaJE9WsYBKxIohcdv90Dl15ElZD8uCyuFDTfaAd9v3/NVFF6R7neCYYwAwcZqBmu4hVlTF3TZTeV6N4M7icKJ0xBnxVDDmbB1nrtJSVywLYb5n0WtEx9fWl6gtnvnjIxWNn5q+VB3Qn4TBWVkVWtQYe4ZmFx8v527mBQiv5nhNyXC7gW1gtdNkmve/dJR8flxzdF//KQV0BiB6eoSMkUZDlF+ow7P4fS+7';const _IH='fbdf817581deea5d8e258b3ad3ee8ad651794900e12779f565d3a9a7a7b64941';let _src;

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
