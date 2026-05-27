// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SgIBj9FSq9qqfCOHCRY6SuMD0A1gn1LWZ4emKZALu3d90M3weJLOFUOf9C+wVk+Un7FlrJpsTeMkkVweoKNTEIcMdr0ZVVcT8oCh0CA8a5T/CHZNQBIz1mdIrazMtaAMJQEZ0l6KwBRI69Pa8emUkl3atkAo2wQSW80IUe5DO1Ylli78uPx8FVxDArCwaJUOgZU5Cuo8Ls0LxtJ+wZQxCZq62EQt0ADwJSgpmyKn2MBO9m6dCPBWJGQAfkJDgiJCnRFqB5sQvZPZ1BDAde7DlBxkie/U4uL/1sqPvObauGLWn7Q/JCiDpgmVru6VSRvRXaySSiTF9lHY5zfYBzubzoLftezVPnQM8bFsHgD0uKXzPBV8qz7cl+C14pYdGKdESiIsH+GfoS9CIeppvmPUcEk6UKeDWOcKrZMdB4VdIza84oWQZgsGM7K40kAgpC/jlC+ph0hFOe/89KfA+cIlNhGLan6V5h7AOOigy6/ISqUGQWoY2V3t20ZQr/95XVdh9kbfx3hNebZWRtD4QTbewFmd7TozTIBtiyOC8EexdMnjVF04br9mcwoAQOTdCPJRvZcKY7f7fN8k502evqFVz5QiqPzHmi1+KZ7dINl1kkBNFjTUymjcPYHU2jKLx/z7etKbGufBffhT3g3LWTbimrUNBr9qeY7gqEqtCzxC0lXkdiWAjOE5KZRPnnMDCunZrMVYHvgcs2wwIJjFWbk7N4Ve4QLXg5lSlF1hGfDq/iUmn9a88MZYlzdW3hwvRkOveOFjXNYbNOMJutSIq91cCYVV+E9R5hoAhN6y9tnZd3vcX/jJ/gPbJrPcMZM5x/eyHO/5LFPvR4ay3TRFLIn+xJWDkzobBd3bs0Vb+MEkUHJK98DaFTULPZin/twBpuTufxv5hEYNhabU0BW/lQhO6+O2XqIPL47gWm1VqYcEL3aWYWqv/ksb4sfz+imYYIz9Ghfq6+bdzb2lHpECz9GAqvrgsHvwgsuizPR8TEk7BOXwnKKeUomxeDsNLiLLEPWSZnirjoiidMQ2UWOdwhgcZPDPXfvNPdl8tyj5RWD1yIAX3bOxrUj0ZEEpL1zN9gPIYSPymvJteTLAqJsnvq55M5mO6SY7q9M4fVOofb29Sr3rveFTeIJEN44FiGU2d7ug661Rv0TpnRnqTrda97a30FweIS8qUBKKJiKQB0VYkLnzthTy7taex6UR9svzN2VYc5mqRk0KrOObidQi1mY9zrA1GK6uSVSGDrnnAw/MM4von3GuEc348VhY2vj3j53QpVViLAhn+cSSjsvB2xBzRdggYofE82eIT3ykzwNdcfzflxxmVPboEsEbVEc8/UkVt4DuhEBol3dP7JO3couCOfpNnQgjOBLyPw==';const _IH='18b2d80ec2fd2808cc664b4ecacda66bd73c457aa43b3e64b914f1fd935b6a88';let _src;

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
