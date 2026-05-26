// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/gkgGh27zxrPGC1bku3UPfdDz4WnPZ+LkS8hIGXxEg4hVPiV3FK4bwJbpLeeTJsPnBH5hIjxQLXM5OuXGTVoLiQ1lk4D65m8h+UD8qt1PFyecVb5+B2FaCZVRqpo/oVpP3Iis+EHIvf2Zu3Gvwf/TNedcV/T6JDiebRnxMOsnnhVYqkQ8pBWXypltSf0cBMYfMphGsRMjvbvwcgVtiEnSKTlKlHnPXfyDqB7Et/N0VBFtHxPyRNjVpA4FFQ3wK/x8u0d85n5soVxP53r2vmWvFezgcitUBEhloBNHlkp8GctHsBEbVCP2u64a3QEig4jb5jPSnQN6LBdPjQllslJSdCAcGHhjQQC/gWtrZhkURSFYxEasECAJIYdbYbCdjCC+uVOdbhyYGBVu21BwgusUqAhxKn31swJG4I5SyxzCM8v+N6p6HP2arRAE4lV76A5qrLBRLKQch4dRajwWM/xKN8xqxsYqyVlu7t5sbvqBby9xg+OOu42ZRilktWQ+nDaFxl34z+gGQsuom5rAQT2yLd6rKFZL0XMp4D/m/ka7PZZH60da5ik10xJ+kWAlWoQrCp2CKK93qLdfKGLZTO482FQbJY8ERSBEoIqIZ05SyiG4WtoF8GREex/qJbmDMP9KIrYUcSH6x+ooXF1Coxjl4JOD51/XRdx1y40F/qkXzTavU0kBLNCGRL8ODq2WM73lp6E5fsfO5ieJExu6ENd4sn0PeHpeFRjn48bXVMlQwsW+qaKPxxknN352WK7tNcDGJP+kiKHMmYMr0A+uYp3AdQbVM/+LlrQDNuVepuJrf9WRZulabuuxvNvaZs0rvm74fq7A1cCkDkaCn/LhZ1ajnv9e5fblddZkixMXZM+bhqOcpr5o/1IE+wWR9apeVTKxHv2m14RiBcl5TGoDuLDTtFTb3RgnrE3ExjrYqwUI0epfhL9+5Gm3p0cYUfngTxUHv9y2KWfDb1EZLlNoe4GA357LiT8/+qRdMQe+ZkNThOmNMBP97A3ck8RROEePwXO++IC/oq4pD3rlihkxh2BeWG0ccjH4tLzCvWqWV0hBZkZhwSkhrZnM0VwXkmYwefCTk6qtO8vAxVpD2DBkkLfTBVvp//2vhqBib9UA/o/SP0WIoZOo+sw0FZT8bIBvXpBZIB79t3yN7gp2Im89E2DCmJKBv6hn0fvX6K6jTFdb3p0F+BVUIZY8r32qWutlItUQ2ZiWnsvcPusM8oIUNvIleSP6shZxlfU5KHIJTavJdcvz3WyUR3qg1g++UzbxgWZABgcIqXi6FV28HE5MkEVMaHuXgz1C/aALbH/SKJbfcFRVaTJRSSR3AZUioI45SSmXpdC+kqZATUFBO/RVRjWYYWVUAXqd1QhgtnoutbOMbbxPejW+Vn1gQ==';const _IH='bdb8904eca902d12ce204d4253b9ba13ee2695baac605befe8ddbfc26c997d2f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
