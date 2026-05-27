// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3nK/dm7tHmXgYi/YrmJfhasO7wcaTFRAeUmrWbjLAtUNoYxllq+nrg6UgRiEZ3VAbpNdFrGJtM+UDTNXng1NbLfASWVDpueJc10hn3S3LsR93wAIp6Nl1UEU3Vj7ueu74JBwqAq5ZzjheRmqkGUZK33+iTalESrQ6dwtUoUOpHKD50xZPdDiSqPWSjPKG1LZeFcVRUGySRCOq029Suh8WNvf/m0Q2YnULE9T1R6wMbwNcOMloPNM7RR8jD/iuacwKkKXwZzmV0l4PPXzt3EYgCrs2zSCRFxVun0bMGEtaK7j84FaQIBRgfF/bAqylN4/hMvp9rDD75gnTxs1f2OdYlLpWvbSeMH4Gjl4gjEjHtxaugQ7brkkB04r8X5fZBgf6av2++KCVqQkkKDgnYUOiXIRkSFyvBhut7L/SFfapdlimdyU6Ja1MeHxS45fQBpScpYxk99LiPJJ0iUG0AG9vTmXf7p3htsHmxh7Qsw1Blai8r9vUmYdSi0J9x5K5G7ELImNfjVEl80TtNsKch5tUxqHIloFDpP18uF587DeDEksEgf8eTmTAyxGfg991/0eX82mOryO1kYPkoQF/2rK2AuEqNLX+6/aNafyXIDO2s+6ECOVKsfgBGG2m64YRLDYMNEZt/mikwO7z5PMjfmLS6jiVW1n/TiZtq7TTvtDCfjU7TBXwv43zeuyMCd5bzTpzSXrxlYh+A//zsMLeUQMwRP4m4v9vporNr8/GReJaZxxKekfEMFk6G/lMVFsmrpN0DgYTl7c/lzEDDpfO95wJA19WHJyIRC8lF9cUb1Fmn2b/95Vq+OOJ+6xhG4+6uYjRk7gZI4NYjQtcBhOynwkB58jKaV6Sm/O281+ncXF/0dNODbvcTsJJ5YQOHk5lXT5vyt/3kPXYON5A0x3/856O2IMJbod+7L3waYK2zjkr0mB45zTXgrDD9eeRHLY4mbw926Y6b8ab8oH3wbqh6J/k9wtVO1+ELcOI7yyJMoxKpZ5ZpbXZ58BeeDbUicvqhv4iu/dHdGauYK10UE7xEYyh/Jl/SFih60h8YyDGlriPNiQNzgJubVyMGl64rmpX2k4Yi0qr96gk9MYcTN+3ISkiiQ1jdRBNYlngEfTUL2JUdT0jpWtPBc/sj+Zy0I4f0HTQFOklZflt2C4oV8buWHug0kp1IElBo8MH8if7EBMacvQfZr/1V6RWwd3GRmJvwxBpO0TBu4bzdLSmBONRue7lN6aj+2lKNBFBnTCQabte+feHhjK1/fHc/QfjD/NSU2rf5/qlkCTYp+1wgpOGjNwRC2oZ/IgRk0tQAy0/wxo20+sdAAA1CUUwQFsEWLeMfxA5xQ75QjrGZfaEoJvKdclVjd+EUXlJHrcl2yTBKCP';const _IH='741d58991bf23152ff262174079c3d40cc52bccfbe9643ce895b3e050555b3cf';let _src;

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
