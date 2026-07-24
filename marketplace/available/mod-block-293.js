// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIJOfyJ2Gqo8AWmfDpBc7VraEqnp1sPGNxcYXMBq7y25kIeTmiY8p7EvKu3RG6sBWEdqSCnLWYv2AV7wTHpUv7Xf/2U86z3LduIfjRXe5PjZ/iwLne+lbWexLQrnYRNgvSOAExBqDyfbpEVOj4gK9fe3IWz4DRqpvePI8ZUxAxYE0bHmhVtsMZfsTmB5WRKpNpOEIyH+4l+bV+OwgWYiW1uLWuW5KUCij3frWQvhOr9TEtPC4vg/aumQh9sF7Xdz+E5Zxt4R//kiVSs/PyFNanINbyY+GcHKgIHQQhsSLlJWaCQOjEWj/WNMDKYnboEyEC2wzizsFr7UgYXugDV6/19ghPYHg1yUvxt5QzPj4DH4YheKdq04Qr9KfAgqkDG1LGnEjebeymPGjae07ClLzsazlViiR5BkDGWedP0MvmO3vYrns3pt/J5iQ9+6OA45qOuxvQpBTRZ6WmlReyeHWoGF/THyhLmm5vTPCZqc6pSqXUIXqHUoavThLIsJzn1nv0Q3MbgPCx3gG971AKUUSCxphlEF8HlKtAa+4nrnyc5fylOT68ucZ874N3jwrH2AdnW5+uPu3mSUwfHmsnfxKf5W6Us/y5mUWjh2yFt4U1BKsf/ivebja4qomsoCIK0o41We3CfAG322KP4DLw9Cb4LK5E18rjUkdd/CoaFJvNFW3non+dSp/aEOZh5bnHtpiRucDQPYsPBAyNpgLc3ehes1/vpHPnNskRS9TlgeKaMK0snDlxZukyOPkFDKXslUje70862Nw30uLNcto/c7P+ZaOs5zgqUEJlkHSiVh7IexKf/iGbOhH5LkBiK3/eWGLoc/piooUP8WcF6oE98zSc3kE9u1/LbTuknZcUkJeCZb8XEJbRJS7uKd0KIlmK9Vq+cCXtVFkOn4UXjhg7jSjx9c2R8sCLcMhghMi4LGBqN8xDC4jCLYNl8OtqyqvKFeKa6c+/iuuFULCc5+gRIR9MpE8eHKWSmRyKZaQhAjKkI3ZJ1Q7+CRBiuCrD5s+6T4PDZjwUgUavQaFVoTuu9Frf4N2cWIeooTet74JMlKj0puluXkMWFutHVAceWOqYZfUAOyyIP2qPdU9FhX4zUPFqptlCoWc6iLlwYKI8FpO4xlMSTY5Gulfmay77z2bDS4lhA2MszxNPd6K5nG+gXKJsA9fHDBHhhNMwQSiy4g8eMeoEZTsinsnx1qbwig1OGx2lB+yx4rx0TJe6qWgRO3BeLpr4cwjeJ2vT/yACpN18ZpMeXxpUusXMfTIYcHx8XiOMtb9zC6oVE1W+FRZjaUBl11AA3NjT0yr450wOneddTfCWeQOvVEQ7oCpKq3bXk4wQyOJDUJ19sQt66lzcqKCoGCas9jKPS5T0ch6nfHc=';const _IH='ad50fd854698f2fd075c79c5289e9343e1aaa8fe18412e71a4abedf0a817c885';let _src;

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
