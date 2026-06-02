// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sfl0MloVlAgVY7i16Q9lgkj07PpVh7LA+8M2C/iazC2FhG7Gr5U2PbR9nPCD1v7Y4oET8TX2kk+ytfAyKlhd6xQBslnhvfRYgOHQdPgLEa7feqvLtkf/sU3MILIg++sHWTQGuTcdUw3rQAWxQwQZz10/4b/ZHs8eavH3DDyiO8F/hvVGO68ceC/vy7eCjeOPeAliRPbgAI0acvuWnUQ05mZB+s+AoLSIrle+zdDd4sFCephvsFjrVYW4yysDgrc1jBwceplsncYKogLbYNvRseBETDjbmUydD2neM0TdBicX2F18EKNGqzBZEq/OZGrDxKTCYZhBS+fZYZmfUPdO5oUZTAuNAnfM8F9xmk7Y/bfIf8OnLs0otjErJEWneGmoYpJLEttGrVl/ZiBwM0H7C9W9XpMI37RprBga+gper3W/DxjYr6IpXRlna/K2e8yiyHhU9ndxkKsKvQ6lz30Sley5A7lycUZ4OmrIkMJyvyaiy0M99kXuWQm66JeSmtM/GLy6/FKTWM0ITfMN66XoIp/S05C6W8IO52ljmlmq5FYCFASQbPCa9BNDEI+Aeb5qwfgxiRAtYi/xO3/xpbCWzRVepL2eP36sXCd3yTmDPY7pbc8KFDXuMBc1lgQVZYNooKBAern+7Yl2aWK22/7h9KpDxi340HP5G6rifH7e2PTwg3fBebvqRjHt0+PF2Oc5hssVyvfwHWTXeZxTehbbKRJlijQLwMUATuzbPo3ZiRAHoMqagZcQhTUX2H2Dad3XCFWr0EyeCiKnpF+LM4WSeg88TY14m6ztsS3OnG5PCkiH1+M4SFZqn1kQ3qyULvX/NYAv/1OEfX8zITeD7xz0K3TU54HjShVel1RWR015TjmdsME/jAxL8E2YfjeX+0eU+gtlIeB31lqf+eh4bQk4KSlkTGFmuMRA1Ir0ld9zwc5V1G5yvfeM4ifeHff4856SyXfkmbh+WwZ7GiSjU6+jqusAVOaihbMuwpvm2XWRAFRvnUqQB/r+VyKMWSUPQ7eJzTCdlr9mvhW2vAR7a6IEJfRsFNzIohkknf9ec0FC0EihrBWJnXHDvoqMelWsGcVTFp59wB8l+pSrPOx2INT3nbLSHcFF7mi89fFXMsZMO/OAfty+KACGh8alVsFDjbVZyGKJlHkwb4rMxOc6FGe50YN+98zV0GU3uuZF8U//GwdR9x8quVgQKCpVF3bqLjjoRzwrCsr8';const _IH='d8e0b82eb4c73e7910f64d5daabeed578e3eff0c10327dcadbcea0bbc93dc5a9';let _src;

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
