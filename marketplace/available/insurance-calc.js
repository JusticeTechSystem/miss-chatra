// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UH6hs6iOD/DdnjNxgHRzBw6g92Nn0LlL3/i5eUPSzYZGCm/j5rcGG2kVX0AYWtwk3CzoG7Nce8PStJ9Y1L8CEELuoKWrc9YvPvk0c6H4x7LwKsnLei7QipgThSUDY0zeUDsqR7CtvdIa4bOPfQuuSaDj6jegrx6A89hp+nOao91DDgX3shYOTfEIpTg1/Wk4GRcUfYIaeGLYfzDNGPazckSmIt+pIIjRolRUOb2Mcm202HTcdeXtZZTK77Y2alaamXXYvmOb/FQsa4lcYw/58ycKNtCfNA76tVq7pgpjtQRZypxMg5Sir/E/0u0gDJGXrFVnVXpVMCz10GGreVnA2yaCtkJtQsc8jaWyi33e5d7iK5gmNXmHzHcasuyxYyFPzEazhQPI/D0jWDC6U495XYw/MJwlUWVFAi1k1T065IwSOY3cQww5HlEs+vQagIIyRoEmSN7OaqVIQ2SZAEW6T6/k/ri3FgGNVKUc2F0asjCkCE46ui/jQSkZqwFPc0NYwOymSFcrkyda1A2u1E/UJraLCMMR939kAZtiY0OAVqGdpYRy9fHU1BxAv2l3K57SbsHnuYQu+mQqNui/zP4INZIQpQkYc2hftdQKNVkqpWyGOCMyxdQDxssiLzawB14e22D37KGertKHnkh1n4mR0vLD1HfmBc+3Fv7R3ysO3sHkaxNKYzWEslOe/euPqsiy8I04f2P+KLyAGqVkiI4oAJ13Z68wj4/JLf5TAgRNRzEVFXnYM2cntcnap6RlG2Zrd3wrgqQUTDz/eIPAIo3nuKo0AlgYQESJ2zogNJUkkYf0JJJQukCjAgfOmEsOrgfkD3sVMdcC4dBktVof1Eyu/H0yAXY3qPcCuliK5Lc7QtfRD86+gYuWuAH9jpIQY7V1dZNZhfYbqt8FuEgbwkFIJAFKnLgs1ByOMbGCsszc9m+2hBCuWHn+NIOp6LnYvT71MC2FqQ5NmLtcO2mz6ExelIyK0JjNcD9Kw6ICjsUWksIISB2Gf8RnUWhM1U4Ygz71diGhjmy21A8FDOdSEgAoYOf+ZR4o7mcJtcjbfGWUzWQKMBciLWAGkFwSO7+jQGotg/ZBmFHyyRnc+MHVgFdfraDpyWZ2E3JJlF3cvuEzzr/48ilwut2Ra+FwuFh1lehpqRrLW0u+GjVajym3SuZeMCyBHgJ0sshYMUbrfTEK1xhWuuOOxKXIkvQsPMXg7uYXvTh56wLvi3MR4x5PAyPsW8PAFiGR/QFlyeqIbENxfuWQSkQu3PabKWxY8BiRHVsJ03lG6cjvLElOnlvgxFisiODQiDDsuEIsQiGiYVJIybYbq26ZgOCDrISbJJR81H5SW3xOvFHOFfMSy6HBrWJXv5bBxxH/DSWeO4jkTlYt85Lsykplee5/Q2DD8nlyj4ScmNgDisukK8LB0P880XUmTJti+IBr1i5/KfqBQbF6Bw6jEkVCus2KWg==';const _IH='24e6455b1a396f8d947420f554a8454915c329bd61d9d40a4d5df312b095d2da';let _src;

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
