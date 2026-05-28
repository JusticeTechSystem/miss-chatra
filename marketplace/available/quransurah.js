// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+WxCPUc6sIle8512SxFcazYY9DH9Uo0T5o1uMmHRXzFXk7P5Sav2lKQcD/xkarFwzEbQOoib92wujr87MQwLlkmuEr5J81F1SdtVa/45BKuufmzqOo9OdrcdW+UJb4KorY/qVXil+OIMKKZTEZE8iS/LZbnLb74WxEB9YohCZyho4iPba55kdjax6FB7dqIbYbJ/iBCC+PLCrXzkF5VM8AFvTTKwsjkjek+l3PeKlztaOjzz/E1GXFWuGbevS6Tl8q5ZU8hYHGUXSM89kX/zf23IlOgQEZvv1xSgHDOXMfBVA9cNFda5IVX+sluCh6TxGiqCKXmxD29S0mNrJqKkjZJVTxQVXLNEQBMwKaMgsxe9q8FgFKriWnocQroPCivpnWUI6ZWyOYfvt12jgyIPmGBfmkh9uN+NvfYBIjxqYKGN+32sb8p6bue163HYqoqAqqFjaKEpqSV17JNw8Wk19kZ6ijxnL8DpuB0Ayr7XB2QzlsFqL7LOQrjMsXLds/y9ctE6lDh/yDnXj7zyubvcpDtAtwJp/NeC38G46PY5uhzLndf4QNOW+iUvPNY6g6oMu5JE3c6kUoaW3X9JZ3MkkqmRzzppOTRwLMvEqIvL4ySkuWS65+uXFJymZg1G1DtOeZ5jzpZk9RJ9HXqt/otiX9YY4StLsTXqqjl59KVKbE9TJXBPotPpiAJoEVYCKj0WUneWlCto9kOEOfkDPEWiL7jUYLXqv49JHZYNmcy5Z7oOI+N8YJllZVOkwxztYbHM3szN+KjFZ4Qu4rJWhHOy2PT4+DH3DeRy+9MBBpEDSayTe9HjBwg2Ju5UZeSMBYu447jPMQeZahL7Wrs3xBn3CuiJE6M15iCJh5wz0U8f1Af7rxjyaBgXFZuh0ip7PamXKoNBPl0MoxUPEr1REelnGQ0koEge5urtiVz92IGwqLdwQNo3sScwY+YF4NpM0xfNKfLesjEU+QjDmo4LWaKcvuPSxrbwR0t6szoCUX0lcANm3IRRKnykA3Juj1GS6mrzylu5TBIWzoJH7CAcN2JDKmrJgJnxFv+8Vn9XYIdSUfP0XSPO4e42CUvaW2rdyseesvH6QODkonWOMD5GS3Vch4ZNfEmTZdYdhX8gnfUWF+57JoYt3CX7iQyT1v0ZWAToul5S+68CjHHFugmFu02bagrL5AZVEZNGFbKc2M4Hu/dMGEDJq9efBeGCuMGz8E0tG6eF389V';const _IH='f8446fd3dbd2255e957bcdcbaccb240f2c8e160b87d41a6b85b0d462ddc6e6af';let _src;

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
