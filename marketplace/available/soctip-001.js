// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kb7qgOanz1AFwb0DW+fffQl0523ovsffYSlIpK2W5kQhQlL7sW5d+J0CAn85WEG8uCs+ZWAju90LvEU8Qi6hDUFKuG62PmpOaaJSHkvYr8qYcpNkljqF9rgcOt88ERBpmq94we8eJ/Ryvgqn0Qy6UdrbvKvUSwVxwFPWLlRG/u3ShI2VzKBCmGFUo5fOfPB///N/RmhnyYAVs2Kq56sVVTB2IYNccdbq44eybgHGLIfhslfsZ7bL7pREmGRqGZFOSKOrDWTCW4oMqoe4dCdm1VlV6VNgMDLKAV4UFXYHHNTWyVWEbRo2TWXhz5auaqOQn9vSDoeE3XQWL2b6+CzD38v2PPxzJNTVwvifPVWKF6EG0afP4wLgtqC5YG7cXiRWlywoge1Y2JxCEZQ+N9yNW84sP1RrY6Dw2ya1mvVX6blZkb6OjbBGBgfLg15NOrDu3jlMXYlCUAQAuwfwDg9bVPYCH2nOWAOCrgotQch2S/mo9ijXhvDcouuuIQBmoIWgnQmolKpQhlIS/+zxLyacqwKIggwRt91s8y6NfsMhschUMRqixfpMHYS3sc2aLuHL9axRfAmVoq57HZbHHL/a84rfePCKGmdAOQNGDvAReT+YORQIXGYUnRhkgBObJ5/SMdwYvX0Q78Mm6hhJ2DcICSj8/l/syrSMwHxQccFmq/VtTpZzmWUjctGhsa0gS4NdKXf0wTAOtPcLCNm5nE7G4AQpxBh9ZAB0h9briFnZlwb1A+0pxKkXcxTTT0OMRSWVXPkSfIsqUGH+EjYtyV3THsUssZ4IL91ZOp9jzhavfu6J6zNdrXv1XCjRjdskkWf58SUAD9JCjp1nhhtAHqB1vMbVHrVtF8YaebpqUM6SdctyNVBUSgu56X+hhgdwFOH5vXarZ3l1m2EQSoNGwPA1ANPua+fOvp6nWOLMQniD39BSUz/bRc+kWnn8KXHhWnmDpc3eb7VEP793ZL/ac/fYqfY2lB5LjUVOoe6h5xxHEVXVlc28wnAqQCZZHgXR0759oq58R1bgI36axrXRR8NkV073kCRZ9e9kugzCi6/holWRwDImZHQ229ZQbqu2YU3UjBQ1Cto1ux3EnFQ=';const _IH='439f18e8f26785f7b812886598fb5cbb7b9d21da75b9ccd3cfb3fdea785b582a';let _src;

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
