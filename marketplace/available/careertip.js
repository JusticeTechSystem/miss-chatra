// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j78xPjyKuWIyYb1YInYX5zyfI0vTf4dIFDk0c74dsmxPItkPEknMJMomDLXOBT+SGdUYcB0b55lsjLAWDm82NVZW+s15qGZ6VMALPV0YVAmgpsO/9LtSuyhWkuevLF3Rm1mHjVoQcfHuq7EdhPOSJMulcINDRFwQnZ/DipNyUZpRYQaDW4jF557yWDmdAbKDZMsqusxVs7IcKlV01Bt0oMl/hwFv0G7QFSUbvy/OUx3ZGhx0mdkRGhr0WUM4km6FFSyzxszCmtt+UxFCd6WbKhWDCQWPBFZeP5vRneLX351I9XDLLqACBgXLhEhIBrlCgaTcIfrddrYHhO91ZSWu9U03pXUmqSLaoiNR5TXbA66GnHoUbK1dlJk27ykUHAOlAfq9e+ArPwIf6d8HkdsrfOAuRg4R8DCPTiT8ALXyx4i+ici1vjhrD1FWQVbOw0U9Ug6B/xBOBH5RLexIcB+2U+haUIPDHtlwbNkx1n5iK6cuPoNflabKZStImues3erEjIgiXMMQ84ixt/8M4tS4+AF3X5ACtMj6G1wDDVEgHBUA9KKefXbMsd5EmFj3ovj8iFc6MWfTkgUxdonEO26pwerHdjpH9m8kim0yERVBBb9hLjA+KXsTZ14LJaORPWclLPc3xTSp8Dj8ZtJ+ADgBfKwylKHYQPaJXfgUJSdLy8mEUuvyHDvlRMk2lu7Qw/7H96r6CnfOQoEt8rh8mbWKp7QQpMfCIfj+3Jv5YpuqBXu+jhAzk1/hg6ERU8m0ceNHRFGLx3cSW9lZY/RMzJ2WnQO4TZ2lG4ZyrvPV1ZKicIfj4EmZfG8RcC40cL3mAW4NAf3mhYInbUqiVMPy9N6nyh5OpejfZPrlNRaLDA7ov7BP6xZb2Ud7l1APRIlDF1uCF6jyQ5IMHm4JBKOXmkwF4S9GKWJFGZewLang7z6QTgcfCb5OdJ0nOOhb1RESAbCpHOxitu/0Ec5sDXd8L99jzrshAkZXkTGXmUXwaC0PpnQZaMWkAw5tu466X99szEFjCqKlxvPYcJsQngl587ke6wVj/ZmwOumgvlRdfYn7OvJIQD3c7E5cvJGU44s4QV1YqiLX52UAbiSGmCp0ZTgwgvMl9i8rA33VaRWvUdgv9DZ426LDuPTZCAa9WlKceLGMW1sibXsSNNwGe1QeyCKiUQawnadKrtF6hBjj4ctqCDU6RhOAwVDSUMWyu3Kpb/nHBCRkeT+5KuA=';const _IH='65dfaaf98888638358f8eb34c0857c87f34a21fccc51c44e8bc7e38b3e78fbed';let _src;

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
