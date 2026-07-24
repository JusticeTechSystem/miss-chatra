// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRql9xwbrI8zP6mkU3GZ/Jgm0HRcLpdN4578Tu2uRh4rF4PIJO9wEIUAfIbKg5BTxkBRBV0uzGuJDOq7mHGD0C3iqL+hjsCoa8oXwJumbQf+kbSdWwJjFdfSMTFYFC64eNt1jUC+FRHraxggX0iOYTAJzwmqUiadnuJlYsBxp7efKeXwsArTdwRshm1meBNLVjD7zEgtLTrJhbPEX+por677lNB0xoH4Auab7yrUECLNNUUGWLc6Id/sMo4v8LFS4T0Wuj5qRIPbftoBtpUuvf7QReEI7y6ZFAzywz7B3FfAbEeehU3+vL6fUByQgSzw8qXi0Z+gseJNbMBuaebp0UCBRyoCQaamglKe9TjTVOHgPWuOQYq7T0Nx+M/GbPSAMySA/TyN9TYGX/+94RAlREkH+bpTEJDTJ7AX4ff2rdg+q/l2+WQJ2oc2EphD/wLsAqKE2MlPY1N7rBA7isEwUBIo6M74jQvXwovQ1Quw+Qy9YA5Y2VFZmKxksnkTqPcGAagPQKsEzYcdZS7CSVBzC4LC1UALQxP3PocTkyzq4gB8XUqRMhpWxVw2ULiOze+6KuOEtbRBUODFtck/63/Y8BJjd+MmcGvkO5LutZ7NsEa122EwAzFNGruCxazFh+w4FLDDWQ8ajPup6uXNQPzWyD3P5x36om/r99fB6rvSv7iUGwZjNtWi3DzVJVZq90iIPuR6KF1bn63RVkFa57mQKBHONkQC+2yna8SLxy403KmHZcM8QA9xOaN4ATSL7Cp+zaejimNLMo7cs0RYEV6LP8B9eeMJOybXX11ETZzIxX8/C8WduGNcDct6G9SlnjLS+6i/02kxG0eu+LnQyzjassaIuQz2FCzqxLoPstVSvPZFceRcgMlZaQF6M+lDsX9kXb8MNKntOCtlKP0DFXHSIFON9R5CT3UeyAfqEDnf8mgnvxLXSubx2NI74bImY/+h4PSqH6jGvNzBCFH67aXio/PHxxso8DW0mVUSGmIki1Ll4rTFSWlPTcM7rFNNxCvOX1WhRXAxLipkJB2Vfu+mTCeb+5oMVE5q70EvKI89HNkCHf5zv6AD30+VKDbdufB3VxB+yxzPLFvfZxUcQ==';const _IH='7823be4c1f35781610bf222c2b69e6b08e25c05b86a4758a22eed2adf8be4e3f';let _src;

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
