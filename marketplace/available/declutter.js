// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2AwkXuO6ANbwjkOD/Pjf3GUVw8oPltt/tn8GBUXQW0xAtwdWw7pcqlmfiIvuVjbRx3MdV9QfMLTWrYQZkLXITJVGlcD1xlTLrrP28X0GjR0npLzRspOmnjQ3MlS6zGpcj9qKKj9atUBsxvMUfPcWNKyVw11QJlmkCgwnEqgIn2OP8F10OJoAWQclLOp4jJoG+DSOQSFt6JCSV3tla7dpiYAxlhtgwYaFtfaLDsblKcOKRQQr3bEADt2peNb8xIKsqu3Uv7tXX5w7Izd17ztnO11s2VDQPbGfvDx3tt7+BnMnoGTikH8pqaecaTZU91fDHRsw3t6x2/nFq50weg7wPfCNDFWrUTY6vjy91OPybtd/ypKIKdVa52/BoHi7W2Wwr7hme46Q6cp6ulU9z5heza51aPLSJaa5IbysG+ssMlZolPWidsgPA58OuNOfL/FGR4IIdNcLgzjuGF8SxlbHjhNWqIBSKhLQzWH0qtqLs/S2MgEd38hPPJ14dIq5k3ZmIWeoevhuRDdL0M10Q3sQO7xpLOfn5mR8TbHMxtg5J3rlvJmbx8UVfeppy1kQr2GosVhfQNtWYmn3eReEYjv/Lo+CtWCcfrLVDbyKw2/KbCs6aaj6/T0aKyNYIdO5mH5Gz/E0cdtV+qoo2NEC2dm2GjgH8bK1OkLgzzgxkcrCYdu8Y+yQTWZSevb0M7xAfvggSXEjGO+QsWSvQVhIbiFt1bj4cyTqznTruDsAb2rrBTuYOs0PDwiOdkxA9D8wLrf7RKS9KVQqPxN3fFuatjr6LZhoBDNvIUEEDGlT9zQkDRPx4Y0Bl7y7OI2bU3KvLyqmMTbpbJP6ixyJCePz9Kc/YRrTOwgwzPTHfaxLaPx5iV2ZUnkXLyfrllQErhe1CMVswS1jqxkAOufzAWTBpMel1PW5od9N8ISnA1aJ9JvbjvDDlRbjeK+zt4st+Tspyn6lw9G1V2IPra82aU7QhU70u0E62foqDyG8PgQVt0+8zr8BFRYcIxa8uCl2RH0+kQaQmECp9K0qvXTBy92BNERLvdmjGJMREk2HuexjyX1u5hv0r5Vp0kGF4d+m16W29LIfHmK/g5F6113GXOjCpP9xAGjfV+/aS39RvbC1uxtcxBHTdEKkJFmmaG7qczkFxFjggoeY4FuZazgKEV9qA71PwzAmH2l6ibJPgYEKWF9Z6mMv9TteFXlxFkXI0MqxvS0/DvbFvBUA0Y=';const _IH='fe872f183c8dfffdaf73a86f7c46421a8cdd3c82852124892a47c463bc2ae7c1';let _src;

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
