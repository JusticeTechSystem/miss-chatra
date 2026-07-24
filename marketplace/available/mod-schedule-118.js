// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwQRB5sJOI18bh5K6cZUOGzYQkQhS8IoMhJa88M5yRkqvG9/+iCpDNPQzaOtcasOVcKPI6AFO4mGlq+ln7Wb0sdE2FjJZ9D4EYfucoibk6rkse/91x6yGTBldU286PJxgvXDEYaOkd7BI2//zPjWt92mcs+QQdvNzMQJVsll/fG9hLCn9AjcuQ+QyR6IqmUFLy1HicfVm2Dp9CRhUgwVBadDWKLjFILvHNyAL39SAuZt16rP/owWLfa4BfbOdngn1jIMdnF/wcggbWnnStbacPzTcAsvl4M0MUUrUrcbNTQLhkzGpWDLbSg5d84gz0kamOkMguVZD7UTfiCvmsLe9kg9QnsERzTkdS5pZe2iAVSDVnNAGFGs+woKfpYq1oDHLE3rvqPBrXR8eNv7L9bJ1LSwElOmsnlsCrbSyyg0OPtf1pWXUdVes4+ni3bdoIfToe72AzjRHsbs11xSvULEn6TUu3EaZI0PigW25PS43Wr+BTEiORUwwmP8Ot+dt4vHhVGav2nSklKSrRooP3SDSUX5YYKO2fBSIKd62j2btfkKrRI6d5lo1NRYoqBJNUWKNlyE3y+U8z/i9wn2d7dao9wIJrp2eSSeRPmmtir2j3YbxW16tCLksY1jQ0HWetXSEgWtYbXE2jzsd4mWCCUWJfhrFIjElWFh/hQN59We9GsJMbqTXaWEda0nXptDQikqHAYo22a/ZHmvS4COyPEOmJq3+ZqnIHMbIU5FOLlEEEGJP/saILB6gY70gy9grcsb9ZG1H/iQKYHTAW6aEuQK1vEnNqCq08ucQyhdmHz+ZFfES8vhGlvxcuxwqY0z48sm8Xh11C93baBZzikZkcjYduhT5uZ6jCamBgtFqMh1/q5ZD+5jazCllfbhj+KefqWGPzDRfki5TnZC1mXZMEP7Eb/ySrza4HZxjwnoB9aN482JTd1b9j0P+SpbQRBuB1z30fcs7tAUsRoBHp/M83HuTCNGq2Smdfez1WbJ5RnK431muBm8q2wsmiBxQ6r/Wd6ahXZqS8xdFQQnviOCSTZNIA82LDrGh9qC0qGFDMvCtKSrnxSRje8EeISIHJ2c5WMjfTo8I2+RhWiFA2s3nscqBlo0ELTcFQp3bpa499rNfXd1Iw5LsWqPGjJ4j7usnDDd/fWL/Gy+pnqLfXyAl3e7wci2bUQlJmf38ewerR9DTDpDp2rBZJag5SdIG2GZkv+ITwATshwd6eUNnx9w0Cdo2Brn1et4QqoqFEXahz8Ww6mVKZrAD3iwnJqQV1oScCAA3myRMFbxG2YWeMwx2siCb/qcPT9XsKht+6dIw0cm8r06d0YPbyWtCV9EvGNdkrt0Omo4KuPvQp+t7oK71LEX0Vwwa5C5AlafphDPk+D4UEUJ1G7DmOYC0qifyOJ0LScj8WCLUwdDhKbRewFX0=';const _IH='8e0e8ee9de42416b49fb5db8a8991be1eac045bba5e7daa20c32416a45b2b755';let _src;

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
