// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPS/vNhuGZnnV+owte8Cpscg3MQSP3GqBjO6z9q2cGgbdktqVo4EwSiVff3nPcUTkCEIrKKX/2skp0OYW577T+peIWmFISfV5Dbb0BHSQILW8yG9bEeTPBTMHrUEL7a+XHeldcVJJ2grmOtSqGyrKpFmg4Y8EOJs4V+9XtC/IwPdmtvcNSJ+Q2k9rkFX5d4kyiLMDLsvDhAgFUCZm3/tF5X6jsXgPzYhygaiIBEWRg86R5UWJHqU/tUp4JdEW6k90Moqq8Hnb0D7hMyTHihpUQeAhy6mgkB/+q/xe0oGLugvAKlYSYgLg5LfIl9AaYOK9COq3KSq/8scmAI1YR/ZGTMqF3UUDUxT9c79/kUKyXaqF1a2bcGzYRP/Xf3frHf8d7gBN0De8Dypuf28oRu36CxeBN+ObHf1seYzxwlYuiPu+3yFMPKFD+9E8OmO2UGnWpSrfsFQQsCtxleX9iS27abOP+L/nA8/oFd1tuqQyX5kjY0T3RbaqizhOAM7VtBS7zW3k98miix3Na0+VHdsclojnPXF+k96mLgwXp7pq3IhiA22bmD+J9cabTEDxCv6vgfxZFGtBOGs7R+ijunkJEuF3ooiR4wZIB5Gaq+X+PGxVd75+UjsSMOECxXKdvvq1HNnxw8y3YuFggFw3nrHhjeDop8Pg3nsWSZ7AyQhAUJmS4+1qJZ/eZ0ENJW6OlaAYSNIHiYLONVB+x+9bvM9Ao36456lLPxC27UcQuuNXF0NjRR3DorMWEt8mRRKGk0zBn8+pS+i37nGzUVnvbZf6KIjvXHLpAQLYcPORMqiS5AR3JFOVY/09ZSQ6JZzd1p7cHwyUtQhhjuXdfrVZ40XYXznC88gzY6jaFJ/zDFYsarK4LUsMSmz06ja58w7LnS7Hli9Ok0IpnU/mbPnvUUDMT5L6xBPr/Jc6Q9j94A3D/mXVnrC7vUBifRbWEoA25nYIs0N2rEj0V9o/puN3LFStZrv1/me13DtPFIeCvqriBZ7QP8fBr4oIU6PQ/ZiN4D8soXRS/qA3Ts3FtNMMmp2PhLHNXJ63pgOvBwYTR9tBVL5d5FarGf6BH+8yCq9B2NEfqtcK5U1O4q8DnCdVq7v7kE6+or4TDVBiKae0NDGTGL6cDccZgqLBouAs/yO3BdEGvTyr2MxuyHFCD0y/piFpWP/5zgcqFKECmZoJDAHWu3woUO0vWyOvEDuAJksYVSYxnqLocc6t/96qbdl2HLz+d+ILevzoaPCzSuwwr54yTLXNUqiBp+kI4Trkp3sGbgKR1CzbZtOFJhItuoC5eEd9ffyNA5kRim12bX2rzi6KJMFRmzjjtn2XtRe22AZD9eP1mz7AIYontF0m8';const _IH='eb2fa5f8060a09200233469dea4cc407bff7e3b102f1d08478879668a1b14462';let _src;

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
