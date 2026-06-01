// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQydQk7WS9r3ky3qPens/XaItMemw9uwTw1JmJb/fPMcm963puCNxnfKBmvpZLQoZs3KCJKtfokPXqmgyFt1DPT3cIVILJvYYTqk2cCf/Bb7o1wjIsrbAYNV6269Ekjlc9iTOh44TymCnhajePJPYWh0UjJwGISjM+MCWnfcfANXbPRfi9zhe36VG5Lt9F5SoxxMeX8fl5hPYE661iWFZfcqNMeeZkF6Y1V9l4lvZh8yw9wQRxPDNupdiN+65t0FK6XePdNeeCFNejf0RC4cPX7QeVlU5hUvfnQPIpfPTpWIeq5n5H1RYrZf/WrxPhYWNZYqmwY5toRttEgQ0Hu5QC8y7tDpjMRPG2LZk3NfGgmfXpxmtFFLUZWBNfJoH8YjOfcIRwuBeXP982JkhNc1wGSYvun/nJaDlERBoTMrDVRKcxA2be4BLybB4g/3L7Y5xxEJ47GnBB6J1Wdf+8mHyp4xLMg7s8TZA7aorcRKyfTM1V+HtvdNO2Ji6qX7OwlAZtkXTGEzlBBOYrRoKv8/7bw3iiVbq/ki41gp9ugC2Z/OibxIh3A5MUeZnheg+Ipx0xS6Hgf8iMpz7CeYmKg/afR3xGBOENXFNeATUfAxFnoOVPe9/BGcBy42WsSKSawnlkPDiMyuTskLR3aiFSXw9p8vGYBKN98eWb/04DdK++cSQ+N0L5c9kTXjiqo6OUodv4QY0DL3JuyH+RCkDDT/Uj1p+LCV9iSb20q/X4sJqXixoZpfcWpW4BE0VhY7cdu0IPS0kvJxi0lyOfnxKajhlfrIYGBFIN3O6iDvU8l7Btzyw+QT+WjFjCGDgE3idyWnbMgCQQWs6F20K1gGMv6NkyiLE7bCOPrwwZ56GW1pJZU9z4Qe7j0lNeZOteiXdeBZZfeksu9q94Z46AFXdV4dSKuNWjfLlj3avuESKdvm7lpQEgtBh7s8VhrHZ4lRN/EgF05VRmzgmWYgopuRArL1U38lK3khk7J8SuW5gl5VfQoeB0rImYr6nMKxsu0ToQNlK4x4haN+Jg5G+EKR7XPfNWPiACYX95teJSRFZJflYb9KakveUy7ME/4Yb7NegvKA9t9QeWQ0QaniTSc5BPuUPuGptZcwSwaPXKZS2jQb8qAOY1YJEcwHzhLKuXF+BC33PZAKD7BjkC8lJJSZyfPMk256YliZWAdrTK1HvD5vAPlwsCp+ehIgXIy9WdqcyrNg2/vuEpyJtD3ZRPl5UFBWpz3ENSvShrkSQgMY2rAbK0tqo0RMO/XPQxMwwAp1Pn7rM62kLZGwXym+ZrqWVMjJoFmOlrfDp8LzPEUk0Svc1FNIr6xqJSOSBYvdE0594udB63tI4V2VkhZvJBReTkrw7hHf+ApZzgxAdzZ/IHVvBrD/TXIxuhejSE/KOenXjOiD7IKfQg8sbjS5DwVNBUbkOmhjJQCrB7MOw31o88iaT8tVrB3uM3OJZBa+ksIOSLIBrdzawC4qr5QzYIu8S2JgUfFSBcjkvj/waDBwTLnu0MnuyQp4X9Upn5n+ZUgWP4Co1pE230ZWlz3VPkgsMAaeaQfPEl7mmXtwKlGVzeSAMVDtGKKzd8Wq2mAUL4ORcDml4bPtq2w26vWLu/47Xq3zDq/wE22q5eq6tFE+ebf5qFb4utWn+LpOm1AlqyAvEH3ESPlu4Ufpq4zoUKvjZ4FQVg6ezqVl9iUAQP+yLa1LdMMXik2QlnBgArDxl2MuowsNpmYNAeKLBkJXadIAOYKjb/pRDe7GyDXK3ggrwl/ekk0oj6pv61YrqVoO3BsKUYFZAzrXdzakafHHBq5rp3YnXhOrobPLQKjXqOmaj0QNenhA=';const _IH='7e4ca12118345da22f05c5c1616be470e5887dbc31510246149057b4f997e873';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
