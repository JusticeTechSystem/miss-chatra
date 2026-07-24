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
  const _b64='T0JGdjQ/6AU5f+C52JFZQIMgOpcofcL4MLxchqFXsN+FewKNzouJZS3KAX2C0M7nph6KVUYdWFCrDCqvgu2or+MiR8JM7CbdvgdT/kl7YsC9SQWanM7zz4YV08lOnlNZ/9Fh+dUGOZu8FrhTVHIUIcyxwlh5GUdlBGXGI+iA1Z2p+W3dAAPm9U/LZyV44S72GdF8U5RwibfRYbDGEDqlegPhH0dWpnHQdplEEJsLH3Nc09WxCO38ZgngEdoAQ28/Upmi0xQqUIzcJc7zC6UFjL1PENLZplQIQ5tRgYCsLgcL9eOCyDW6C+Rwk96HgpyErWfUqirzoDajdxdPi60QEf+FxGwENiD4dW85dRpAEjGKpAOTv6Ok8HAusjD/AIIZ3mwLdgafAKTx9KbslLH4V4yJoqhCZmyE/hrR93863qd/zuhq9moaFkOA3YSjRw8R1fSK9KMTdMn+O5F36b2E1//8MV5XPqGknzuBPfjOLsJ8YSLfsdQEZZfZoRmdIRjCuihhZU1gX4bsAn/nh9mM5zN9zl35aj7EdrsOEUsXnGXnaLuop9K2RgQJavk4Q3E7ub64kArQSldf/2HrMe+bpKblQaWlMgpYOwaZDz+Tdv+1NulQ0aEt0QeXoF85NcqAM85GyQQO568reoMAMEYhVWtWv2hmJckcva5fBSbMUS/fMGOnH+dpYSoV7cmTORwm9ilMP8hvIDyHR/B/eFzpDDGciYjLN6bV9ML5/fw2mpnpnAhPH79zhWNhoyNoTxKGjU6cTTjphIHVuxjLIFwI1LZpXkZycN5aIMXhThaUsXAZZ+DcZj+dx84ga7f3D6mCdllLhgV5jw5hdjYiDfhwdNGMnh/nbgED1xfG5UwqrlwTPPF7B4VBsM52SmuDoj30WW1RBnI4PSK2GX6Mio7gNBfgdqzKASF3era/2v9bzwefYEQ9bJoVf6cArEcl/Y53u/Izprr4SZ3AUjxmF6pAN3Jan76QoY/GWkFn2jRnnaAkduHJu+rOo3ZpZDoakN8=';const _IH='6222d8429d0a3ec979d693c45889cda912c8f47b4f54267b450e74da7ec980a5';let _src;

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
