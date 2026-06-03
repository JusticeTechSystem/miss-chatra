// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h4uFQpWF+mAj34eaA5rzrEZeHPEFj3pyPUw3cQ0Wen348J8vJyQn7ShjKxHE2+pppRvjCzgZ7NK2A6t0SYIf0E8DTlAiFtLDGed0GrFImKN9VMIB9x+JWeAT2gEzRBqMxv/GESePWHbkdvkDxNYt30KyBeiSkFoCOb26d6iwer0eqa3B7Fc3SHW3SUNQpuNBMMqU5pViJzx2hAwS7xi82EldCdRDnllJwA914RPmtRBBxSBEtV0bJ1VqPL0krCu5Y9ozUHorvr8VprqYXI8gOxrF+1RGv0nsT61mYS6757WzoBjuN4yL2wR2tNjo6i8HusCTakF7OM0vCbaRvyApNDJ+9lalVtjvGitFRN5O7lBCtpT8Y2lgvhApJXKR6XUGWNrGuUMAZILeelAzqbgUnUjC6NvMJZkT8yzOF+UifWlcFc1HBTCQIu7metXiVrMIS7eN2D+6VB92uIzNvmNFUhEpdsTpXUQwcKCGzr3jzGI3YZtxDBX3bjXZRI3k04AIlNtE8pYIUzCZIu7IMxERsSAVOU87roJzt5JyDPWsQWsMHVKWG5HyGPGxnlXzVN0g4aAZQxdFhOR3rPODLanMnlLF0DFE6J463GJoLhqoNZevblhjluAkHui3WZI46hBYNptA6ABP7Tf4JOQTX0TJknsspEphjNkQ5d4jAwzUVbDs4JnyRMVge6KmTP2nzSWH4iEDvm1UZQFzcO+e2A3vQ0l15CYZ7kRpeQac7pdD567DW70MmUbxvKhrxvuiMtDWhOyA2+GOd5Zh84TxD00jjcnCtfzTEHaA3lCd2dxuBZ/dwBgzGL9fYavgDOE+T6Ax4RTjGh/uXKliyE4g4On9YMYWk1K2XOCIYAzxX2VMbYqFqoyhHvvI8QQJaXfqr3c0fx1NOBXzKYHpDOUm+vUNzmFosXrJPgXQMQtM1t+HlYZqCCjg2IWTatTBi4VFykSqhqgRCKn5zrQHbY6SJ2kBi8lnWMsBHX1DiKfJO8GNwTJyuP8umEgPdtFJmNx1FyZar8C3/wv6G2S/JOhHJ51RiOqMTik/RxDkk7Mu0ALcKuuICPem8HqLf9NuGEhMwh0O3+zIPXAQmTBzYfOC8WVsRVzDaLKTgYIFs0hgawyTCtgornxWcwFUjWI8x/fdZc4qWkSxO7qRkn9e8QnQkuvEytbOprOcqry5KiU/35wty/iZ3i07oZpH5QgWHRgTzSvz8g7PcBrw';const _IH='a757d394a2250139f340590b9679cfd8ccfbc6dbf9ea2a0a7e7c262d6e89efbc';let _src;

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
