// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7utECxbLRPdVhJJzme+15x5Nh0RnOvdWBKO3ccyW5fd5V1SjFdwUfPbuwKXn1QDCQDYp4J+A7/3VHGRfmUl2GVSj8edfzxXoO5WKmocL429VonfyCXFmRkYipNSXZQ52RuBXW+PP+MXxNa5j1xTT/0v7KUZlWRnghVha6LwWpMnc1dCqxCuc27UmcYJaPbsKZw0FhzPEDYFHaNayk6N+xw3GA0/98wVFbXtqKWIKjR6td3j/7TNkoiMqTSMTIJEtKKrFHjaheNcOFbLZ+nFVmIouDewiDlsgnNMDDAcdpzHuYCa4G8KzJGoai4XMbsJmmqm11X7lM64A6H1Kz+Uek2PkrX2zXN1Hm384MRPl60cYSWR9t9bbtq7C5O8gzklCXsAQehjwzvTNIDBdeDA+X0i3Lm80qo2L2VIk6MNo6ILnO3iVyZbLGIaIv1ox4tKtA01qZuyb6BDg9cskbetR+xKjMOgTLNHzLqjBRCqkDCPeQzMkDMDJs7SnKh4EHfPXxeu7ReJ5651fLhBXBXlJ9xfjCu4m4d1oJuaGVnaj7Riia5TNtnl4SSaynOQYo8GtinvGHQFnoGBx7UFzd21lrRPZvuU7/9Uy1w41YEBfiPvGvtOh92Ktb5YDi+18dI3z/skcXBLKAtfGslluOoTJNForMJH8fm+3bLIH8Pm0XEDqVbcfaovQXGlsl25usy+POEFZauoTcwxtmxjF7/NBIvshRLFfUTLZjwAi4WqhvRzLg8ZtmM2WnHh3lzq/+BuLHDECR8SHtDn3m0HDL5yh08xBPtxmJcvbTi5oo6JjzCTc5yjJBOCoj5YXK9GtcvGvZKWF0yxX5BLWCkYrEH+XTY2NqASXKb7yMWB9RVIkq4HsAoqDAbAVTI+5dfT8DnK9npXwefJkXRJip+0ePUq/RlmVl5757GiDaBkJpcIBYpK1n/rrFdzjlG2ic2AZHYJ+xjI7WlvSZzwmsInMMtASQy0HO7GE3ZWzh5W8yDEfwq0zL0EjwM8sLNFYQDiowJI2kat08ykI93MeRGyMHG+j7cPml0d6lslkOXq7u32yPWFpQSNyju92hlePJKmbieHehVeLHvivUoNHDbTf/opll8wNPbd7AW0OcLFlZQ2K72vpsE3bkbJGJ88uXmwqAj46Smg254ky9/TnzqR+oizYN+TuBt1hjkibsKAG1bgzpqlFyWm+OO57/k0qtA7dSxGxnBfKQJ3Wlu3ag7/JvGL1sI2Rew4ncNz5DPzmjyvA7STU0NcpXe+s13+TdCG6m11H6tUs9rN7HLPYc5eVeibQGd0A43Qmbq2O6SVwpBpFpi4SxXbKxBh/A8J3u0/iYxpdJQkDtkiKXAHm0urD0WtQO+jUChMtmhkiUFhNi/KU640Atelux9vo9Vg5wagJha/Favvk5KAM4dT7Jkjr7/0kCKbhSyOEP2hw3NEnhnEe74bsmXmnThOjVim7xzMm1DaS3tGSgAPs99336rfSPrSUqLp8JM8q6PDbCTCrkgdt3BMGuxpQtcjB3+FY4gQhxA2ipI9FHKBWZtJVZujdtxFqzfCXXr3WyS8n2mnoIs/TdWwfjYxzjS9Vs4MUgf/7AL7Wxos7wgS+1zRzJ9jG6P9N+c9HYiRjAa/a5+l23XsoWU5CNnhcWpgkqfkqyV7HOjFVNrLoUpx+88O5ZwkUGNNi8DiDRDMFVQexywVJi2XBDOoVhaJvEyL9VHEhvrg7CBb2npgPPpb01hhTsJNrY7p9nCywtpMz2Y9G5j0l0DGYKQzz3dLcWw5YygWQkO4diVO/u9cBkeA=';const _IH='924d96f22d9d3d2c09d818718de73568249661a470e59d8722e2ada809cbadfb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
