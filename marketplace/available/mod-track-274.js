// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbcorzTnRGOw1XhFCtIWw32W3798DK6qZhwLMpkLOObG6fP/SvvMOkn2uPAGtdE7Et3E3wC1XUsiuMEdqpzwjj81t1dgkJVu9eicxlW0x7y0qo/1v0G+A7DmxVcvadaeHorPI7hIRPolTwUhjP665QUAVnI/nNI5vb52lJXxi7LU50y13UBfqD7DW00LECQHU5VCeCa+NbcxHVBiVFqn5ZbBtUcJkWHjP+Y0C/r59I8ZQ9znR/aaXSqT3eLwRkMcWEd6my2i+ZwlgVmMIjpOc9mbtfo+y4jnpYdWnBAXZtFBH9UCB7B82unYhK7SU3N0TcKA1xmD5//pxBe/Q+E/OTe64bfcD8etAevi1k1uq9wFSF0mvxWXIpkgaj8+TQLzkp9S1rpC1wigMaHOfyRcbo1UTuzIqEFfljNrF5sNid5bukRdfhHBothU5r09mEhC56qDItLkJyhGpQKDKwCZpDLlpsxXxzy7/SPLJztk7TreSuGdLSpfJW3qmeRQ4tmr0TPTV/zFlrtdu94wV3g44ElvUsA6K7PT0cri0AE66v3jSk3L0iiYLaz41HLS4PeoASjFQtlkuq4wTie/Dk8LCTo92f/S8GJwncS4dhdSSEWMwjKmR8DS/cb16EI8Z3P45TAGNCtJegd0npe5VT2BMWqUAD4OkKGHR9dgTWXdTQKjTa8PDdNHsFQM8untcsyRp+HzpkbtHj7WdNPwcFFrsngKgzyUSA2KCIT99nBeZ5c3Iy1Qo60VPZ0MF741/MAoQISoVHF4Xw/HqYJSCPMlfkcjhr7sI44zxW+GVsa11rtFtCDD/aruokKEYagID6nRWhyXZ/CRn9pkHq8ZQi/dGHTvVQdEj5zDwENgqgWQnmvAydIKw6IG9tjIz1UQogID2YgR5HACdNgxvqtJ7q9Q7tiJ6Rlu4PCdEok75VwJEzvptAUQjPJPB9PfOcHCFr1HQBBc70CxtibFOmaYAUxFoGJLyrDdkKw+cRVJF9ulaANoDdA84+tED9QjoExfl0JfW0DgJPrg0UQ1iA3yf3oqE2EFByqO5SzonsLSLrg0Gcol0sveHmpSg11UZ3O3zFhZFwjvBQDSGzx99V+lYT/DAugwI8yBSo2SaVS6JmBJTA+olTjOBFvmfaKhmB3rrLohRAAmNO6qFOStB/OUA7jkhV4Jl2eTeX+Te+Uri9lFzF3FTT6IAJH7uufOUxmqVyfOQIz+O22PtrzheWE7MAZjjU+lMRXlmQCbEeGGmsxwPgDv6mV0WLk7GqU6yZpjqn8sike31+gYDi1kB7mnRcb33oskhD5ZLHuRL1wfMX8mXwohNQ7l5xberGuEn4bq50E2RRrQXI6zYS7dcWm/LAsttx/DzraAZwqrjmCzwWtek=';const _IH='8cc4640d60376e62be3ea99d612a3ac7456ea490876b5d54aec56877823f5568';let _src;

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
