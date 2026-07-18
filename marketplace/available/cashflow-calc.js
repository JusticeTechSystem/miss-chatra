// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZtM3fAIk23W/NSMkyrquDOd2ffTDlwnIcWyxpv3Rms+pwPOS7lhQjQIEeUk/ZTEdTjxOMhCpsoMy7AOdzjYKkj8HqEirE4PGRr22p08ok4s5f9QN8JFq8LenLy/5nJKRjq1mjowKjUpHD/cQb1ACX2m921ZdnW//s+WFeGT60XxA3snCUlyxPEEpn//acG/NtWewE/iuraAB+Cou7hzpQ7O0LYlavlbJbrMARvUVcyZfCQjKOiyxA4uNYsTjBrM+CwCg3qiaLa0M3tLUwroOo15YmxgxCa6PMmic2DikR/Yonmb599xtwK9qOPLEaGTp0eL/fKjR2/0jI23DKyzWRhrcQ4orvYQn5ZePZ7IZwhLB6qzKhq/s/S4JV5Rh0Y8U0J+GyXZN7Win/cjrv2AzcnBYekFdgM2xBj6I6t+2w5l93kUX8lbZ73CEEuVW2jKUtLO4vWAMqrNqb0PWDrtmwYiY7iXfQ4iNv0SXxlQWJNmAIYa+4VnOfA5DCN1TUL6ZJWmKQacUU/bJlFi4FLed+iZ7uCzKP7UeCEVCJWh2SYbCEQaJZBbQLlfthgXDboit/7NVO+KqVw2Ckfa1yWF3KyFSVDDgUovC2pV/bqOAw0xXzCBi+mtTDvSyTIWU9LG+roPDThCMQZe0ajga3KhzAlp1sW1it86balChHa8COMu5WIz+lPuGjTNGyh2zz6ZwrRzLVSyQH3SrSar0NRXAmWWu7jiAF96fOh9rCAAdRq+9qHWOCM5OLVJHhufoO3n/q5M3OhIDDtMo2oqQ/o6kmKBiR4GqqapVzMOk4G36F2WhFhCGUkqd8pYjvq86DaTQ1M8rx478pNec/6Z1+bVSxwMph/MdLk/upmynoPzcb8cOa1WyyT5IggbBJ9y6/3BXs4VnmueHr/IZkDt4R+l4H7jEGQz95qY4kKJ44cQsV3a3MFLlIqjz2EVd3Iv7k15+gtfaFjo3IwZG+hUHUvZIxtFdux0G/4GPKwlXRReTIK0R1JHKBfeF0//uM2Fms/0OvBvaENvJ4M4tIU7MasmmyoItWKnhLcu0ff7ZDDv9NWpVOgYyUZmzK8IjQvqYYxDKFvLPXr9yAcJW7mhmmO45zIaDR2e9Ym5ss+NHk467rGCMzncbvDihTN6IE3p1ck0toAYaVTAbmy0R2xn/Wo+H7M55Y5uBSipXrbbYvawoDqqEFzJn9zAMyj+x7xfpccfb2QnAUcXjIp78eCm4Jk8KWD5IPAlAmMMRtMRg1UnqDQdbBTxXgjmvGb3O9RTgjqXPAvtY9aEB97w3EvX9XniSpiDgQmVwhophV71YHWcJlYir4KSGxIBFO7v9FU19P/Zo=';const _IH='856f015a23f14ad7f4b6079851ac20e3d8b91401218e3f8fe6ff0b8c9830822b';let _src;

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
