// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1hyk583vqWXMTvzK3F56ma1pRYryRyZCnJWnHA0fPlcNj/Mk3kgLZuKvGM+SQ9A7+eiofgkU8di18UvSsSUF7QpB1Mu8LJzzCIhqaktGIqVqwx+fxz+7P74zKEFKSUlkF/CFsjZu1zr0K5UvTtyW414Ik9InxfuHpZb03xKnRZ+NyoHKac3uMIrqWAPU2bHNkh7ewleLyG9M9XT+SqVNezz6GqDlaBCr7LgYum3MzyCjQ/KfRlqemGK7rW2OCGoomcqQzYfoXR601FQ4G8G3Ohquq6Ka0+X01qF25m28oK/dfJMzeZO3aiDaaFAlkfgs0oqin7lc6kaKruLui7qiMbC3x5Etm1tArX8CeQGacOImufRJbzXBlSosLDoGiwarH5MG/i57KAymtQCOFI4/1XnTRbkljmZ7GOXv7UHTwAahbhygcD2dzESZYB9WFvXrZuGCa7T2YErdNvmh1O2NxENcqmXYhN1XWT0TlVPeooQJLTlSX3RQSrPFBAMsKQQr17xHmcaQPENs+6f/5q87ysLIMRNZS94zF2e7/+QrsKPgazmMVAgglNQ+WGEH3/J4aEsHXmc9vLbuZaFZ1VeTmbXGtNvvplu7xtP+d8r96lFPcHE9kKnVfO5Bm6GoRKNbrC3oCFGOlEioEdA1QaUpcwgqHZ0lIkm82NPER+nMeDfxVWjopnqAB1w9ygKJxCbWadCDxY0iOhWCI8mBNK8Ba68HYQM1BjRk=';const _IH='46eea3b05554fd1491b66fdb09219530ef2b174390f6e92f5b631073e77de400';let _src;

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
