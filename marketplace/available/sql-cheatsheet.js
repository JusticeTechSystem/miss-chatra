// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrkpkUgqlzccbaispJ566dDmE1ADqOWws4IoS6MbI4qO73Xr/oSkmad4QDj7fst5VKMtg3g5ZN860aHwHD53+aJAzcCMEGJBDTsU9DRPNjwuYlseb7QrgC/Z3zI1GJFeYSOLe4svA0U/Glojndwv1HY2RTtBFNNFC4Wq1BbaszLDofhj7WeiDiNLl80bg8NHkxiXAEmLh2jCASV3poY35Z8TpQFMoLP9AW23uld4nqbwM8ugwHKMYlQidrHB7T8/er08n8j3Cs4EQeLDNl7k3QAvxV5DCJ929p3NGItEzkiWgohl+bw6vozSqBU7OjpkJhbtvNPJOQI3pgrcxyVUE+I5Ypc1me6JG6rriNY3VyIi3QwrnERJ9jIjI+/vLUiuV5O09Ik1NbzL6d2UcWtOLTO3YQ+ZN1y7i3C8i6ncO0CFZixSv9daJOZidaakCLvZIFoC41AnFDrv7wOoJe6hvhkH7IqTkEeh2ukaJ8z/nZ4IOe9b4YcbpmKrqeT8q6gmm2aEfpAnaESVlXvLVhtRFin8CNf0iPTl8goVxTSKdhXPCsiGlvBxYDCvSp+u1EUz5VHbL1gPf2OOlStMKRjE/P/qLbl06st3s+Ce5Navf50jjvn5Mfjtq3ZVeIxatKEontpgzojQoorr46sWz4N9JeQmKgTwxGvJpfrejUxfu4UkKKdpgBQtEynFaNHJf9nztXJbdXsr28WX1SjVz8Ti03dbXtmHb+/w26uHfB6drBCvAF2Kp9k+wNZJJFKC/rqLhV2x5uia+X0uDosTTS9nSHSjEiN8IpYdATDzXp7MgsjbmJMwYcpuEJ62Z5mElR/vs9DrsUTYMYxvtVm8HMmmlwQEO1QWpojtQJowe/LekW+6zmq4ZEW7qQUiSD9BZYNaxBY8X261lid67cWb4+W+6dUuMIladbjhyC51/OvwuHZlGeLCumreZHTHyFu8kP+aMTglylxp4W++Hy2b1+//OKJVx7nf64HdF1XXs24mgg/9ZARenjZ9JdhbyX8sAW7+WUsXGpRIKSalBk6BVaiDECdvmn9lV5PtD5LpNorms1dNg01mBmXF2Koh/zWb4mjITd1OliwPiKYaTSzFxK1+GU/0deJKXk9AvO4zAxLMAiK7OtqV+k5vLiV5fH5PsW+d9FlbWKfnmu+ZpcyXABEvDYKoMDgGaMXyuvEZWXqrK4RK6ED9IASaKOgwxCOBgH/BICvYVbmekvjtAuVPTtiw3JvyAZ8h8/+PBI3UOj/xkVert25Dg2lS3MCKJzXbTQliKSSB68Z3CRC4yMF5rBvSh7/MBl4sdyCi4KKBP8/AbJPnEvYiambrDpxQMPDdZx5OU9utkXQC3S4gEJr13rYgLzgh7y5GQTNeaKbVNNdtMpQhfiyuqEYVuNQaU7Hv3qZp3LOGB1HIeTHyhH9zQ/HVu+iD7i9um4C5EiVFEHhEwfCKBcJsQmCxmAkJ7D+a7+NuzRwo9VdaJ+lk2ovmv6zu/tq/kAqWOd8p5sMs/EJ4281pMJOr2EbEcPdsNP8LD/ZU2OdS2voHblMRbrse8EXRegP38SGskAh7tK/Qag+ZTRKrEKTC0ywKBW29E1MnMNIFKK8b2NUjB+xZkNVAPAxRTgEBIOVXEK6Q3l6Xg/kQhY5wvwz6DgqoPS/CLjkPCIHfli4cZoGcOFbe2Pjhp84EdmORwjavXIdnP/2BPgLC3kiu2t2GAb3nYatWDIvIkZBZ9xIwyr8GiDgwSnHWjdo17M1HJ8ez7kfQmVulaoaoRXeGAI0YCTL2AAeBNS4rncKzENg644hZEy3Q==';const _IH='c821043849a704d072f21b279991bb1d34a46663abe5eeb1c7f4ee275542d97c';let _src;

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
