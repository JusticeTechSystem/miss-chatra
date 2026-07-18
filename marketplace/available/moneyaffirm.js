// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMrZzk0OPSMRRQd4XTZwMmiEq3eWmCPdx+YUfAuybrM3ES3Aoy6rhuss6QEpm4+hyQlrizjhZp3Yv3ZBkbVsoSVAdwVWEH76DYhOXd/+vuNQecsfk9gl+EF3/XaHZ8AtiQoBgtsc3gQoOrc0TI6qP1kWrPVQbRo+gpToUfkukBINsShRYP/jMdoz4k53ZvoBVFqcNJ34CiQKk28evjk6UNpmOnCTZLkBdYamvJwjPVTtEOCuQNvH+4G+DRXZqE8O9I7TzTfWxJQm/lkUiXuiPhsGT/sIC2F8maakO+f9LpU/r6QL4Vzi8En177Iye7zGMGFECpMZHvl0mF+5fkTf0SGw57T1eRjkqip58X+2h3m8j5HLwVIW+M6+ls2863auL36/CcbJfZxj4wjKoaEYuqr1PfyI2NZbe4bXgPJXVoJ10gmyYKG+so4sZokVMQMvy1FY/bCe6BGyYH7n5jQKDRWBBNLPog9jg0WaT94XTCEG0+zzSwfNxUViz7WfMwNWlcDc+8AQjtxUu1YzFGE9JikBTgxMU4BJyxQhPlk5vhsEmprncjhjzJ7EZhPLLFVDpKHth+d7xkQ8ht6OKTr6ky2FrjQOgLPGeKyaJl7BYryXBx4yOYegcICMuvU2lslsASfb2vhtiFCwNo7L/dISbgRDameYpuOSL52XNprWhJsAEmecPjUXlzDmKseYdUcaStXt/wCFJKLWQBqUEHeqqQCxcswwr1wCKb1+OrcsDFncB+UiQpDkKLY61h/nzYq6BAWqeals3WJAe012gDWvsnfqlgUE11Dtz3D5rr34aWrGGhb1dnPKt1Q1tDqUauL7hg+UD/0kfOm/VL1EkrDc4uIkiyoEHa5mn9YmOBq1jXtoNop63FvmYx5rV8PB/ASKue5cvG09yVHsVW+svFhWs+pbQIspqbE5fp6KkSNJr+SOpl936c6p7dpDe+ol4JR0flrGcIRHn5YBPotu+O4xrJg3GDAcquAP6Uo3xo4jkxWjrgT4JtEC/p2s3zNrp0XkaQpjGVw55shb9upQ3C1E63+ZbD7QeH2+OnCF6IeqY0oeSYXkSywDAbsEeVHZ6H3xI7PvHl8jt8xVs3BYcp6+RMUdWHe3p78ohDDy9g9TGfT4CQC0y7HnYJHN5n7i3YkhWNno5vUPD2ayIVeI3q3qs5sznemrwIZECo6WE3PIG/vm9vFJ+hZ2hMBIhsTLIDKzMkWsEB6V7ZkufFxIP8';const _IH='d65eb1e014b21ff8fa17e007e8a38eabd3df24c70bf297a238429c9374ac9bdd';let _src;

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
