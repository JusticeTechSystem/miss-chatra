// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFYJ+sf1wA8apDFblIPSmVCfBvpAeE6surRZI+HbxiGUgIN+7DTMFIZV+MlQuT9FURQ9o+BGUg/8+T81IpdFMocgLwVi3wiK8sU1EGl4HqLw+TOOaTu+dvUPeMVFeUaoJXDxONs67BFPKuUmBPk0MAN0NYvY7NAQjPPe4T6370q/83qaigattPqcQA68ae5FVg9u45NGSi1To514gyblCtfnq1B14UBul9nFxA/TcHCMnfnXu15ViatdienI43QRzT7y9R9NZdgmc2gRIq+UJrKLhTOOi39PTGdsrVUqgOml54HnH3y0KzP8vbh5yGQL0GbEXTE3MpqE+t0QR4UOVoC0Sc8cXxvu/iyRzfIjuP8GL0SZ1+Jy/eUo0O0yFT0ptDtVqitvfn+0sF73cTrPce81YFNijjiaRBkP4gXWd/XvjxlyNREZeyFltIW+QiFvvK1nb0/j1bvFQyy3xDs5uW5kEd7gId14p5bVUKuPYw4WRUYobmYatVtFKLtPO8qlVMzZVce7nDFI3IHYC7Hvnqvf7qVkJZoYKaqyvPsDw8dyLs6kGzzzDMtbsz/OmstLPXH304Bk1GUUI62pICfis0z9d2gsaRq0sG4DeyK0o7ncxje9F/xXl0vu2KTHPup8PMgMGe7fVc1atlXKa0bKMrbmq51Ky25bUvDLyGuc2zc3P7RvACVl8nDXAcs6YC+IMIz6j2OpMtZfplUWZzCE2rwSPBhLgMmr0+UILf/p+1y0awaJorAGyJx8Zs79nZgoDszK8+UlDsVkYRPV2EluFn+bffaNdMfviCPkN1E5YEQNL5YRU1y/pgnQGIJ4PRM9HV14mEP4ADTKkDI1gqvqBzYJDCEjJ/MpyE3wf3fuHNmNv5xk8K95pmezf5Yua8OkYnn0LXhP3QXNtbwtBDNva8aTvOmadpNA+XXUpeiwnzuxo+hctOs85N6tpjf6llJgWvYzx260c/PZDi9dSJS5fjGimhDhrcvz4CXGQnnjBiLRzxh6XFnD1X3OX/v6llYUKS5MXgqEsbyHEUDKRk8=';const _IH='4f65785c5d1a7ab97e0725725a0dc1d0dcfdce176c8b0e906f60967693da0572';let _src;

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
