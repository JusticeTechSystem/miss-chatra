// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZSBPTV6e/A5DOON/7AcxKXAKrslLoptxO31W13BnWwPbz9y6ge8/AvBesuoXMnDzgETomNoX0AAuUT4hDSTrCHvhwyIj941Sg4CzuOG4DyYrOtqWntUDMd5EYe/Srf3i/wu/8o4fHa6rGkNJuNXjt1uNSvYjfn3G9sMRHgoElLL7iYrer3LeaODy8+DhYw1sx8x8nYrgLbtvGCid1HCGxe+yGaLgJmgjkExtTdqxlLjfFAFd8YZQC+tWrAuu+RRot8aWCZXXJcIqs8fQoFat9B3/KrfQ1U3upFRMxrgcH0SMoXWQcZYKHMw0naEDXyv2KDbRngKAcuKwv1XCMneU8xZYOQByg5EYCrsjHole2H33KFBmtTk5vYn7KwJ5DdZqVeLum6zQug+bGa8clonWR2etXx3x0Dt7YGmIjTHiRSBXeeupXdc4zM71LJ1SdB/Ix0fyc4wanjtJGOVi5u4S91iUTcr4f9Qjbk90oC/GOLStksI7NUlE5o9i5L/k1ungBMTE4SToD4eIk9341WV0odSN2QIsl/lMLquoCrc03e7pDbOgkM17Gs7o8e1q4SwQL+DlcSWTSeF1sWiBiyDlAUn9BnIOLPU8CT9/753kRf0gos0oSiKfZ/kk8j718xtiSsr2wWcsStaKxm/4PhRz/G6NJffcgrXCiWfEB9jzL5DVQeJqKU4UB77H0ExaeA2H2/SLFu4L+mFC+2VNUYT6jkNeVPZOEtT5WG2MkVT03lyqyvUcaAnA4gMjneW7KFBaQqRqFhHBrH+j3DYlSUsJksFCcekY+89fw9Ro0L0xTRMTWzDezbpzxOpCIveBWP0mN/vnHzu6lg4yDnJa8GjHKBi4jeoWbmPhHftSCSwDxH57Dy3hFbLjMT6uJGbfVY9cJZSD6MrmCw5iDnXGLqWn1xNhwUvG01d6NpsbVLq9WuqZNEmyna5iEcxvklQRk2HXLvRRcsPTpBFKCjE7Tn/V42RVKBO1DO+koJwG+1S1DcfPBr7oU5RUn1DVb8a5djX+wsVZ/lMJEwDWMBJWL4ySYcZgsUAWiOBEIAssTIxgFu6KxLmV8AwmsDbeRtMR8pkD1ElJCCya7xt2+KpbvMKwWCurqStO7uHqw7QAcvAhTFpTAvxVJCRj3o6rf991GCZMVV7yTXTt+0irZo9MIJPN3ApuHoA3lWYIjnq+Q6iRmXeNntqROcyAiiF5II0zgXTjfk812wU5rppknHVG4Bc6PinU1C58+fJwrxY70NdPddjxkth909f5Y2Br+XN2rQKOAeHluGqQC7iK3tUQh94F7zPNybmkwyAWEZCkMyhb5WAjMSR2Ysemw9SQrtn/nR1F1yQANualn+Xoh/NW0vRHejg+E3zykJs94RrJCxAwTFZTn+7dtOMGd2Ru3rDPC1nFR0g==';const _IH='6d408bbb49f5f571de98749d0c68f8f87a97611e2d05bb40f3b0a0ae8a1207fb';let _src;

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
