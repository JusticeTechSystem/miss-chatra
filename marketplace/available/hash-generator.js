// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt/4qqyYIkiQmH1mOgJ4opITEIyIJVhA414yW5YKs0WJI+XY2vAzcRNuI8SGZ7wgFgJwaBYvMZQ+BuKOmiOTijpf/JR8At6sJLIhbkJN2LJZw1LvWv8q72c17aOMm9HoRMAaOTYRy3azqFonBC6XDvCfwrWvQFtpEZFo1nMihPNQoOe1yFqhUrLcwlgvYUb7NvasmAyhmbslpRh3H1srx0ocXylRe5P24WxFZ24wBlKAEKAiKNqFhbbJoye46yscXbggepTDbmmPowUX1ubi4EjW4u6THXTPoIXD0TZ4rmatWwkdMOm1dA5GyXqzsKWpqaFj9W2zec05irjGKhrfpz8o+KnAVUCHcI+Q9K5Ued6q4HGAJm0QEvcYc5HgH6iaEqYmaLc2LDbP7I5z7iu2K8/hVImSDY+ZPSZ8UoEqXIT076jwKHQxntwPQEAI+xrBd6vHqT2phZ5F3cniH7YjdYLv0QBpF0vVhaqmQ02HDx1BiNpRYMfZeKsKlGfc0ZungDR2bQBTr0ioMPr2JE+LUUMYziCeeFko1OlaX/JcdSkhvzLpAwTuEHE/PmLpAxjHh+p4VsOtr3DxSqaROzHv8gdmtwcL7AUhAm70C+6wSiru40I5KqYkktmfL+HIpZums91tBLPyfWszZWIJwlAK90+ihVLgF6CfJyBUiXQUaQHM+WzGZJADckVik6qp0bfVPsixDMBgiG3sthmOFgbx7JT9sHmBfD+eE8HU7KbpjLCdEUa6Vsgs6nPjCIVNvk+/V91/I9xvflmy32CaWe3BZOmqkjq+U675KRfI7iJzrYgC6jNrWKPwomHL0sla0R/JFKatYt5PnBRtDuxPVrhgQGOHrgxQE4Zcr6r7J8ZTwHjIxMVb6eyz4qU0gff0stQ8AwTicsJzfzU4AvHDQcnuZFpT81ERfvUjBbUNM6CNn5pHF2P8ExZUKX6hY70fEG3dTj3yv22HbCl7WKW92hszZo4Q7+qz3/PAI+ogXvY00v+Z5AR1oKhNivkh3x+BVm/n9fYFNAfuYAma7eQeXUcZsNOpBDUm2DmTnBufZG6qRpux/y5wc18iq/zaqdmZhicKG/Qf9aQqytyyUZwlaXNPI/DKj/znqHUTn8VapTg6OwcRhmkIc/LmFrSleZtNxhVZyNAXfToAsweWRKvFZE8ppWmzcC7HGkTqZSV5AHJrN8FBBi62NfQRSiWQ2nFyRXb8+Bs3cNB9KZlg2Hmf32Yj75eynKAzMYrYuYhkreF4pq8hNyt/1rCXBJb/4cj9++4ki5bVD2Vc0FztsFIOS0xt1awBVSmF1sKs0zj/MucphspGUlxvGehq7FEAbVqvO1ZRf4zqZtUpZE1WSMnaKsyMRG0VApH1t1pRUmJr3iPVtBtdXxSyP/EVX0BuNtS0PDIyMaZxkwGCb54S8YTGHZlqDoKOnDy4aNmuBtc6MByNaPZJCWCo0nbjGC1sOitFj0e7TNSAoi9cWOMJQjLm6gboA2v4gK+2Bq+4QpsivvDEYfN1nzWTr3P77XWX/F7Ae4EFkuqsuBm5njMOhRmH7/PwNog42CITj0R0zW8emdtwMQcSZHsUGLtwnwsCtMqhrjL1hLlvJGwpfEI1diI+ODrDyIoS07rwnoJ6zt';const _IH='9911e48fe9055842a0a2e971b80aae8366381394b3ea63fbdaa18c35b49c2ac1';let _src;

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
