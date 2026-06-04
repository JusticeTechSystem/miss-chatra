// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rPVI9BwoOw/ofD6VnqicgTI4jxFnszwOqKdv3vUybF2hdeVbZTi0ka8esaGzgE9UZD4TuCNVLE6zNifIOphtrc7uDyhgXPInflBsQCNT4HDYPuCsM/R1rOGvtA+SW8RqXA1KHmgmp2GI6PJfEs4p5oFvk/LWULv/NudII308U39kEv2LC9GwdGYxbclIhiK3jlACosBzNt8BWospqvbq58iBdZkJtZckbob7zEsFvE22/XWaKp1dQJok0GEF8pkebFRhAdI3xPW6V/dc2n8b44SCAEEaUQKu2LTuGN+OXBRNAVwfkCFjAIbWxslONf6eUOqfPdF9s6+OciQRb25wDbbgQJL2vUvY0nlNUCqFtpOohIz63UHq8iki9EKUPkzTjlpLIntdZAwv9N2AttkRnl2RZU6kPfifSxUE5zRJ2WMuhhhsoJCiWg8R0KouPj2Jpoz41O1Hc7ojGbA3xSVWROvt/sWUVTFQtlhvI1TjtdERwIdXWeeHPlRCe4U8PObqkWENbfsluoSWGXu2uo4b87iQLHK25pn/QXne0PsjBkJNiSkPUlvcsvZJs1iKJt30lYc6rMkurq/ZQpWgz5rwRvWG0sF+e1wM+5PXKfVtB+V/MD7gAeEIlkPxBgqOXzzacYEIpCS/o9LW+f4JQMB2GT7pB0ub3JUWGr+5vALiQg2PMYYtBtecYRxFGXj8uMQYNieGofK9/DfWfXlq0Ob1QKAWS5DZD84kluEb+y9W0OeX4w6Ks3lvIScyWatKt+k9oniLil2An4JG31IJOmBaW29h5HSotwp5y+c22YA5qZs4yoLTZnVp+oLFhaZBZrcI5hZ81KEvaTw/3KOWjgd6G0beJpDiZHy6Dr4jKP1HTcuSk+ugCFAHRjBB0GHKYZOo/NEdUY6u1/iJU5NZuLgPdsKZViRZfGjS8qs5YFPyNfwtTyZ1bwUpH1vPCLyF6yY6gL/l48hr6pLUMD1agYMCR3BdOXev73S6xDC/bmUb76ZZ90A8YZrWlI72kfVh0yOQxvXCG98TdQ4ETgWxm/Bx7KPvrLldvb2hIgTHlHyfs8fWtMIStSos3HsIP/OC2yAbQqTVrM3HaGa8nfeVh1h0eXP5g5CIciBGdC2gU418nJaBa5cCXLbeUa+JOzLpUeBlACWmOZMvOl7pE0ewvGaCwmERxw6co6rNap17EYd0x4NN29stXwChKGSQa684iYa6dn8TiKTs6ISicTO8ZHypRrw2WVBgxRxL3FX/1LLLXZoC81IM6FYtKSw58/ay4LB7XPD4Nkys56tex2z6pBR7AjP+fmK2HnoS+FD8FgIYb1ZkicHDABYOU3+djHfZp+b4lW0E/CDo7DQRXxAa0VSEBhXYQvtxZVyLB0f0IMz7';const _IH='971713e1ad63d2f7c9919eecf9fe859b1339658924c8c41c353d7126be204cc1';let _src;

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
