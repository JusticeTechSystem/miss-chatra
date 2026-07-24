// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUeF1lVg9r2rYFKlDvxPF1mkyEad2lTLYApNaQBGd2y8PE7cdaSXPltCcXpLfnbp52SLwGi3S6HmyBilCMBz5FF36P1rQAdU8xCMeR0tH1AbKfYhEv1M8RbTiso5KsRHp63O9llue/h0MJK8M5YSWey+oab3ZkPpgfNatSURpenVgUC8gs+ZWrwKUWMbc95a09Ytac46deMcuLtPc9OjZo3T1nKGXJKUa/m19/3X9r5xCb8BagbzyTAXxebGg/mwE/ds6iPW/wJ5ZG89WKtFU2d6NqPtmWyIRCT9srRpX8mRPlayusDm13pzoS0zj48poAWvGyA7UQe/Pz+/Jtlrt9CagYAdvbj7RqgKPFoRVgj8S844pWM+WTnVgt924o4qrpA2+Tz6+dmLWOQwKRJv5JZN2mmJdj8GSoaLOOJMfQxYWCjkM6p1PhnHQWTnpNcE1HEGOgoUoUIS7Oe/Rvo838G/fjk4GvsMb4RxRhwHSaJ05zw+Ewjv3DFcAclAm/zFQ9PC4NdQMYbzPU3YbyJPTSiqB+KD6MX6jwdeWzd+TcJbichPa3yU5yakmwmHfiES3ar/XRYCN44RlIabP1WQvas7luFp0lQmuQHXjtqHKrR4W5R7xaYXe/Q5ppzVZO4r0fg9eUDfNvtSBPwtj0ABF+cD8Cf8WvoHKWX+Hq0RPvLdXCS545L6vNqj+879igWH1SBrmNzxjvUMc/Lno1VAXR74M6162fBufoT5EFCtcngoxRvhvnkGhZfIjl1/I+k086rugi2O9rMWlXY1K51bFPUfacIbToWDQL78UmN8+umE/DE9abo1MVB/1BjN2/TbGBqwFKdj4LJOdWoT7e1iiCZlWfEUYGMPThvHJUEtDK2D3jjCKYch+QN/9/AdvtdtUSZ73CJok7WiSak+zar3u8Ri6HQ9ZJdDCWgrnIKXiu20zK+MB+i4bgKpPfLg==';const _IH='65c218860da507a740cd1e53cb6c32a9199966a915b244f27a392d3a979b274a';let _src;

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
