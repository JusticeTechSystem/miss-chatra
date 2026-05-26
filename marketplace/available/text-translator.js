// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3P74O5ZskAxuohR9AwmOmXgTUddVzjln0YCdUZmv4hal6AryszMi24YZniRdkcBLW8abj8BvivMNCx+obawb+sKFI5ajxJyBIjvOAGgmQ5xOZksEfLYueBlfYJwn4TjjlLPfKLqE61UJvf4ijvPW3HkjawHdrpqpvZyr07lZ2Cho75qiAqSjv0q0H6YuCNa23/ZP94SEj9iC7fb0nJpp+Ye7uCU44v9XBI4v36XAEp8Za6id/Hed26XExoXMCWLMXvP5qPEg+WbGJmV0ZFgltKr/pTkjE3mDzrzc7FAuzoNC4/HgUxMxneT6qOZka8y05EdA9PXvbG+Ks/FDm9R0S63yWcX/hn+qW0sTJF77Bnf1Vi3Yf/oZNrVTsIajjmvq7HbWP7hm5gB1DgGfkIFHrMM3a2sahei42xRcSB7OIK2FgKn493aWfuliP6HG9+BvZnW97W1AAA+4ofm8yapr1ONAqbF5+3BQAAbjIPv4m/RUlKGI0RqMJScSorUByYHnGDhpVIr8xJ46st5XKHFTtGYDKx5SshVrbas2P5b2YBc+aJfdEpGz5Vz4A5PaqAQgUhi2jmxCMGwHhXxcmzDUfesI1WRlbzM5qxiWndsr8KaNgMtRNxwmWd2bwBowVttpKHtZeM/SsTA0XYijKz8yS/kgfHg0NAptVoqydn+9poXUIF3NUk7j74WbTl9RggyMDoiH+9sYYZR44QRz2XvqEaQjDiQkNOUM+d6TkJtFP5zEtmrjeMt4LYvvIzgYykyIAc9U8BGu/KwK5LhUpYXr6EgWM05+ueGPvejN15hSqt9AgGwMiv0skiu+Svc9eaTVReKeZ79VdjHDOHVm/2hthv9pmeNQJ5w3hrcW8Zw3OJHOVAcEZPTuBsFo/XQGUGWzk9Nm7jA37/nub60fguQhs9CGx7nKUOvXrtuDGNCXYQvpAssubj4UAjf1M9qVipyOPtv6vvCr3dU11lwNcfNeNDw/aNGQB3j+Klr+D9nyt8hVh9GSAv7mjN1bK3kn+Ms6T6rGT1bXDho5nO3ksvV47C02W5XhT6fP4Ok+OZVAHWkIIkt8KZXlBJVqFMI2K3asjfcAJyyze3A8aXNtLwjN8bMQYdefa1o571SqPMwWb46QnXeghSMStIWqOAcpD71XXwt1aXuWI09I1V9PzqMb3OYsrgTaLhjiojE/YdsQsZIxVW0PwL9NncN1qwKJ43cd82xYr0tsisci1iuVnyuDNDGQqWzCKC2djiAWtWkNiflJM8FgXnHNTHed4OMeAvKVD9WqhuptJimwjFFG0VgqoPHgh+yU9qQABzYYlcy8lKfkEr8xjOIYbzChbdrkFUGsoj3n3gk0b3TrkJxEcunScG4uxXJDkbrlDOynMuYz8lposUvzWGpn847ZgihwhZ8Cp05uDfVn+xX3ADra7Znl82BnV2ylFZcrEBMTa+W2UgauzMvTJC0ckZHnt9JJ/ykMIaxADXZX8Wj6iofa6WgwoHKTDB/1YMLBJ7zQsIEmwarOxd3LfLkaoVrFWxVsWXZmY3BEJ0jBonWpj1ql+FGbvpWA/uxMC1yGFr8EIwuxYbg63BMjYQ1lIZ3TKsEcnKlrn+CX/ZB3+JHg4ZFRKXpNSoWYDnSSWsmnZFw7ckpOZyUA3kH3zSxv64rLGaPzBkH4RgE9HTCJMtADxiiQmlE8ip5IlNAvMoRC2I/dYQVGDv614A==';const _IH='262851d1b8f16b6abca4e9ba987452135d044fd42a2033161e0920a2e962c550';let _src;

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
