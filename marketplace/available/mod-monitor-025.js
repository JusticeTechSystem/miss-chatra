// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BnlfhhEkbnayR0k4lz8mnt0JfdJhQ7WXQTgH5yF6k14WjW19FAD/UdfvAOjBaA/ejkX9bom6el80LC9wAu3mJqHJ1dUf7AK73EM49rbMmJwbRCgJRoOEgi5gRCQErB7hILHo6BRvCM4znyTk0XD8e2WEMU1LrjKpV0TOSKwURsHBzul3stm8ltdsRxrEnqX4GTTNqhx/Wz3dRNuPC23/uOF+YU9an6Xm6v9b4paPLiwyWvJNl4iyG7MfpeprUO+Gs260c9VM2O1krhkIltCIbxy9eIiQibBRBsuwMlgeCqGQ2wB1PzAo6om9PuabHH1tiJQptW9LpM5q59M3rvboM9DO8HxuZZ0ceoCt6qEHAl8mRnd6VlhuI0mc10Q+pNmWF+F6XG7nIrT1PHSrUrzrAF+HM3g5//v3+2BfnLrE+e2BzJga8xtLmovFMaUJ/46P5WO0ZvUpHiZcBrYJAXuNYoWsvcae44rSO43poy79bS0r2OjM7vaSpmXs2kWiIV4ozXDLQ8M6SGLqNKr4pUutVI47vv4pT+FqJXnSKTOthGtXnk2th/W1UU3IWYU6p0KI+24aLlktGX0Z2C1y0zIZaTLQWA+WeRqxHb+vzNfG5Ld4xxB6Aav7x+MsdvNXUOSHLo29cjHU/CUePYkL/sLyjySioGzJ9LZtTbYwQiDwIA4rXlQOqKtRigxwpr7yKuoZ66yi76/i43AE/fVcv1E5PAGu00ZLqnIeDvV/D7YezRNKQDP+wG9ExhdSwoay1r2K8wh3TOpxsHMCsLfPiuorg7JLODafairrrhnfdj4UTBB/KnGL08y3kgQZx3bypGPCxfqunzbTwyWzMbN/NGmJVtvwXUcjgLOlaId4q53Vq0t81yFXvTFL4oASalgW01lC0a8DvCZt+tvxiQq1ZoDNeIxhsGPbQbIKdiNWLlt04CxGEshk2RGB9q1WdbRunL8lx+WvZkvrITxDuXg8pEaDqpjZtidcGfPuWsmtNbTGrn+N7f0njivuMqG9ZCTMEyqHYjdU+lXEmctEd1B7m9IScIy68Xm7W8n5t5eUDAUJZ9n4JoVCbLnktwaA7RLkTTnsTJ8a0Y7uQnrR31fyyFU2ByeUTaYeaExBgkhedHgcE/tcY6hWloDGBGqXyZkAMEg0IFGUNZSJeO6RGKYKIDGTYHH5SJU4BXsQcMN8Yw6e1dyBp2UpKUPrVswzGJun4GwbLVHzNhrOnEeGqGH4me1NhmglWMBXn2tdoHN1ZC0UQbFt2Tq52xl77SawPi7Z4H55Lv2WFb97NoKHXaKdSece+Lrhe3fOje9ViJTd4Z4sAupxZXc0w2wVriZRmodIU5YbpX6edu2sP2QSoSQ32fw1SCFmyAXRtKwwqU/e15MqB68foVmYXLOUVBEEiW+d';const _IH='f21d08f86db3915a8acb2d5cdc2e84ddcf513e4801298829481af55b85ea47fb';let _src;

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
