// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='leRLYfL0SjXvZ0Uh+NA+IMr1W7zaVCDAava/iQ+koSwlPUibx/TnZKe/KV4pB1pWletE5E9a8AEhxSmelNjPQrWu8PDJl7MipqPWoD7635Yatk2RCA7+Z8ulIvq+D5GC38oMepwDXhdJ476txzQPbkZ5NKcGFdPfaKZ9uhHKySS+IgP5+KRJZnCZS8lvWIwEAziWjDmEAOyS2DRScvBAZSxV0o7rkBxAOHW8Yd1YEG9JmuOt9ux354mFJFkwZDPbIgOImhX9BdwRYeX540xPXIpj5jQtI1sQAbcmupn+E4ipftUvau1zE997Zu0SH3CLpTaOuTSUEk6FNr9S7HA75zhFmTdC0Fii3ndtjuHdb/lzeYozaEjL4kuq+qAafdJMbAbxxqWMJQ2qz7wJV0FdimdryxyezxnmFFvCnHrz01tktKL0Q0F5Q/lAIsJhwc8rQF/wIVXTgHmuA39+TOPWZk6cKtF/mr0EK63lML+5bVhKkG0j/DjgtE7aI3SAJUyTWKtmzFTOHWgDS4Hb6oG9b5YdH3enzOprAI6M6S/NuLDlR8BbaaTeZIh7DSkEXGKSplGVFM3aAiF0/BePvpt8XebD7Ehqv/4cmB37dUOi+AeqTpC4DDiuQaDuBjkxCp8UdRVVsCPjc1bg3Ph9nvRCUEwLE9EKD1N+DlrSEPH5I00SXofQrbX0Fqdexl3GKgiGmjslTJwU7c/MgINYQ65kAWqGWdId1UsudrQijsiOLnKjOFJvcGpPZNb2wujvIMYj5cJlulmBgeEJLDiShqL4yLFhQ8Au63sDufv4MfpQpe/IYucNuernkOVo2e0RLHNnTyIpkIgIFuVI6cAC2fdmdiUnFqekVYgj3kB4JpMbNAUvnGAoNxi3tj7CSAjY0JQ7ugs/5d4v0gaOBMupLvImZpklMP0xD45kSBOXUA1R2oY3ixvGmMsmLQZY6dMRzdx39zmokKUYjQlQwf8WK61BKaFYgl/3KD0potqkBIZT2HVqlzY0C9uF0RzBe0buuMs4XCaMAJ9UHdKjIVN8SC+pE6vrCyd45rmg8lfv6pPAMRz9iDfK+uzRlRtFFhM6PWPWRXINswqWOdHMfuOqY2MuJUKj2RyfQSOoRmhqbh75mF/sIK4YLIQtE5YFF8/e4yN7bBoCo2Yfh7aasnn9vd3J8I3AqzFjqrTFhq+P5yRcrkG8xECE1EepQpaG94FfeXqIJwK8fh0MBrVACT3CsCq5NrqRm/MUMCjfYd8bfTek/1kqa8ZL6SlRXGq0Lns2ofLzlnoSzCGsgO/XXWYiHQ1ZE7uFARfK4vDTMCttCZpghTDD4J0iWA03fXGAfZEs5j9Hv07PohzvidXyQq92cAx2kEkAUpbu6AWwDw==';const _IH='2b4a1eefa960dbd22b6028202e84fcb59fd7e9890dbadf2f85faacc64dbed865';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
