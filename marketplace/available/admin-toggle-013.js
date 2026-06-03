// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t/JTgSColpVs2PH4Hj3gcS84l6Nq9HxURtXrkBC90KgXChPSxcW4qzrcTPlgoqpCFjG37GmliVgiAoMNc6XXevwmGL+TFtODevhqy2aMFjgW0ZIlNQleFfl15onEfJGyyu4C7EwW8nDAoRnvRDN6lW3BsykvPh018YkekXI66znXw6UFy9obtHAC9Po8S+yavawwZ5gSXNJk/r8bVMWnRfMo2MyrARnurBa+v2pJFxDrP0Z8AQqrLiB6XCfk8bOc1CdLELbTInRgE8nOBLXtMNJ4DXVzm4ZzAFk6/GCqp0PP3tceT9oDXTjQ0bqQZXIk8Pb5xG0P9aY2bEBQ7r5EDQ+PDGP47QCxkaXrTKr4wuBQp9vLbhPR+At6AdTTETIuP3eI3XziN2wi2PER0dEWj/o4haiOV4EJSrDDj/zFH+v0pyPhmf5gZf4LIDHIMTl8Wx6nRBpdNZn0KtBp3wFkUWya2ownQdvox/OPt9YUTU5Kxw3vXjTrBggBiAtGXfPDtWW+KXdKJIQruR09EpWf/QCzS/l2waaeDeF646QWQtdHfM9RfDMyO1AeBf04uXIC0J0OYTleO9Py5r929BRMJkUn2sXDmNqffs7hxwsnh9GdHx2OmC2d60B2sKryF/itl06lZ3zJcAC6PyQS4XLzuIZyz/PjSaZPAGjjV438qkdA/Ggrb0Bm7fWoFTfLb7u7zyvrDo0dtqNP5J+s4Jut5V72rZpewzpjiFWiFdAm+vm9lfCN2/l5x/5+WNhyNEjutu/t1gD4wXyYm3Xu8BzfxIItH+EE79pJv6fmaHqkdel0nk3v7gK3Lxb20CwKPIhHoNoJDVyiDttcLkc3oUuz9jQnHCyKp1PQrnFLOA0r6lhUvCaAXExLu9+FR2eWQd24wzxa/4K429si5pCh4por5awG2sjvxcqcne67pshEXJwov7FoZAyMM4qIRcDLpV7ha+MJv8uU1Po0XsugmHwaUqb2XX5eDrb+5orN1sCgZpDWj6fA6QM1qaL4qydJ';const _IH='fb5164e25a36e96355b6dfb51423220e7e2900820a4a6bb06f0d94ba735d4c20';let _src;

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
