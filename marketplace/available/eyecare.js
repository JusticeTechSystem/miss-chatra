// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAFqUjjboHh4dXEdhc6xrB6pnjX5SqVXwumuyRrZ/nTsKQyNYtEpTJ6W4XJnAnpQFqIAwWg7TIpADozComQVGwffkvNWjanFrtxrgC60b64Rycw8daVLzQh9ySrv9MqiuCxcuIqdI8Sgcr9Snr5MuOBtDZK9f4+medPKYIbxfjUOZ7QdpoIgIuDW0uxKhHMOY+uewWl6NvfSQdpOk337JhLaRAM2idj0tfDVHDQAgb+6Zbef8LeNnQDo2flqP2K43LjyHO1NJizeXpl5tEmmW+7v95t2PfBaY/qenKGqWjwEg2BQHS/W8IdUOHkhwmG1rvSU5OWv+1TM0liazmiG2u+7qMk/hPLR0KU08NSEehrMjgegH/uHmlVHGrrndBIWbADM1y6G2kjEhSEw4usek5zdcKeN7VVtNreHGCQVMD2eGCF0b+oVgZ++Xv2Ihxs7BRDSSMYIYj6BBB5xf9iJBBv6jkUgtR9CFszrltZqAShrGxEHdAvGvpgTpDN82Lwt66EeGPEm4ka590OjDYp3bt4ZzXGI6bkPzeM28Ug8Ktl44wiZe97uqY5Bp+9CS6HTTt9Zg4/utXnUmxowpTuChhQW1VIylulxliQFv9NsZFKLlDsL3dThaoTt1D4rdxZ8nPVU7Qgj6UUukKeAoOzDhva2lxCAeVKDGnqT/inoKTer3Pu7cd0Ab7Q7EQzkly/8RNxQgf91L19Iqs2C9DyPpqRDjqP0g+PP7p7UftDMrPfoywKD/vhJIAIS80PIpQ9ugs5JOo67r+1VoLntAtEvu6qAvHlpY8Ng4LKaVgtSZLvXZw+AWizcIFCZsow7eBUqv5JaqdeLJd1F2ARR44mF0Pe9MFYEVKZYRQqgz7xEmAlu8TwEzQoRfcLUoGOROOuxblre0ORMXKU/OjtXp35XjUkDtMoeVSn45lgs0uHeuUMpk46Em7PN14OshIpK8uRtNzGLOAqnZ2Yn182TXKOcGfEbiQ2XShqn8+VmXqyx8Y8zcnv952in5T856szdTYzyw07vgC/Q5klqkV6sSHNotESmJcwZASeY56AwLWhFcF8AoQPPr5h23y5MVVwKjtxHafhngD8CjdLcR79pKm0lM40g3D1B96KqSVHDrXmHhXin3QdlxVXPtb7UncG51wVjCPRoZKxuwcMf84KywgUsHyypfSJY+g54kF7FiKUgDTbYDjvgXX5GfkHtwXM=';const _IH='8fa82eb0c8372c11f538ecfc929a1f06c8c20253c12298c6e573588b935c28a0';let _src;

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
