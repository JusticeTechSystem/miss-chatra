// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FpegdQFIgQeG0KSAZ28TUqwfhul+zQBad/KxoEBCFTJC5tOn3y+IVufveVHG72hr1h5z1bpU3ALkcz4flQPwGeIpkSlmtcJ7tkzPN3bJWXMnDnqPDwWP/LqLtsu03JYhRTuqwWqHkfyUb7UUnk5wGPKGPvpcGYM/VBYezJrIrsddnGTT7DpEUyvPuVm5EW/ogIJnKdOn/eU8E9uSE3bZdrm64GWDppgvXk768ao6GYIHWyaTxCZ3h7wh8jrtGLHGSm6MQ9Y4xlSC65nsSc6DCW1j0YUD0TcOHCNQtn9M7MmqVXZHIFtLkD4psKgSZLKBVT/+qltUKbe/hV3tcyDaRoh64TW4bKvaA4LFNXgGDoo8pzwooU5Z+xm1faR8nFcevllElzmgcTMVHX9EHVNF8WkdFjL79pE8kSKYuPygjvaIY6T2pLtm9j+ogRqQDc/kq0/VJvGrhKV4iioehPRc8rlni4zvbrnCg7iLb2sjlGqPO+CZpwCQhVQ85TEZlwzZPXw4/aH9aBy9OvUJP0y7h3kEP1txxBB2QKC32ByCVV4lkoXXKRpKjP7FtXdnuC/LnNz0EK8ehyREgPZ9tZYhsCl32KifdvJ+wLnwLKtFjBiuGI1tPxzJMXv4kQKXWYoWK+3Pdu96tnMfPIVZhs2GYsdSChuMtJWruU4tGlSDc6sx7qC56bUzqowxlyI3RgrdjvbNHoCVQzvNzJnV3HJnZPgPRZsL8j4TmaHs4f3XZfg9ALvnfQSsDk/Bynm1gIjPCn0a3AkNRBMt+4MPEb1bpLXDWnRPklTCzSAc6lpxQU+Wt8IFimjDZStWYar5fa+WgorDfmhVMs+5GRJoaEZoyiYBgeTUc0Cv+CHdNzh0yA2pUFFMgqCN7/J8A2LW9EqQlsOhiwJUobihEHC2WJuPNcV4gTyOz/YNEKSts5+wQVMaydXXKKIo9LZ4tLwI25kWlPuVpvUlZnUG5HjqxpzLxCpEkC923hs1YKzMHtVnesD+qjAN+Zg8n+rztZfZ3eleOS8bEN7Yp+ZNZA55+bwPVvbk0jnwz+826u/IieXfjSOu96i2YOe6tBNN1fhVa886xpYLGVWiFsb0zvdg8Q1ckINQ3Dmsa/xnNlMpe4v/Jeua4GyfgluDbZHIowOU9L9H0Q5E/lNDOJyVlwDMGSjKPKhgV1zJC4dJy9xqFiRTaUgDbBPVkMQrLe5iFBjJmpygPA73N7NOO6RzOJq2D+3IKMjSbxCMEEM+AwFqmnUeWV9j2JTrH0L6NgXzsYDNaiT3CPfir1PS6BW8zz2/rT9poglHHAUZCdd3X+AsfDQFcm0a32u5euyi/ooWOQh5VfISKQWMu6krGgJN2WpYPfcBTjNYKG1fmm5rWQ==';const _IH='7dace3650b1b9b5447aabe6004bef3d9ee47daa58884bf0114c0ff1c975ffdd3';let _src;

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
