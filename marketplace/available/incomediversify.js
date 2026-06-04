// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GzS0FzEa2jBjnT6/2fP7eT4VquFd61/5JFGTVWcwvip4HOOJ7Co700RRYEPSVFBaZL1WoLMbontT4ou3qEeBLfS0s/XhnmO0fkoXzAJuNXWD48fBZ1O+IsRIo99f02L1mUAeSFRl5MkQlTywhUhrQrfTBhXScYYq5d1OJq/8PfHopdvAJk4qqj7D3fbYPSGtYpHSYy4ZPAAl49qUPS39+Wwz2CBCXVw4mlu8KPE+Odl1i0V5U0w4g5K1OYXLkuamnzzs+Gp40XzBI1Ne1aXw7Zd1dSH+MsuOFdUafBeZONhG7sTyGBp9Up0iI8pdEDsvbd91zXF5Ewh+lXorjJD44mq17/+1YuGiBnlWYoImfn5eeeDZ+tHdIc+qz7bAaeJ13mMoYQW63K229SnSZJWcLoM3e5kxF7GWWek+VmqRpQ5Hfc1sB4tBAaASuaZO63p7CLGW8O9bkyCzjIeNYKXD7e6zDm5qFA93XI1xxg8sF8BDB2baSzFBnok199rsCSBEdoe7YLQwvPoukEDc9UcfEUiayUOL57pqYrlwYRbPAGHGyRISc7FgK5tKc6PUsaTW71x6ANxJFvNjfJZaGN3dwI25z9WOB8gW7mywIeMttLIRv6eISfypuNydxFuSYhxM0QT3lgvbCzf6/nrdHt6mpkHhPdZE4g7UcAfaFbHIq1+vxxF3WIOKq8aT+e2k6YQ4Iu0jUtdZFvDOF8gEU3mPsL24I8c9bMHcBKtXdZVbTF/wezhKldgPoy39MvkVC34eyYG1g1Wx0SGKqaSBOxi+lu5iqPik6x8gGKN1+oRfYQV+yXRJBeoWebfajUcjllO0YYjJKWfMz297oS4fD1vlEFBKOXs1nvISt0HLcKCtDPtfRmmOQI/evIkJ79DL2M+0NudKPLbl2Ck3LFn8EmyOljn/MrmdiIE+WpPb4WREFJm+zjG1ikth6aQi72MckKrIESjKildMalWYEHH33aMteZz4PP9776etilUBGWjVUngGWkwSvBmrD98PjEgTGLtT70RliRfS9UmQXRXzNGLxryg/SfMvg/ILyiT+EdY7LUVYDD0Jdy/sYKZyIhW6RSrvMpNbWp8Kc/LAVzrmqfY0cMi8fBlEuUvArfhXudljFAs8oVs5z4/YefVTPsCFJB6oM6yH1I0ypGSoAwMU2mJCwSP1FB0mR9a7wNrVY8TE/GOv57UUXJj1C/Vl1RWh84UiFu4skf9vYgrKPPaPrg==';const _IH='d4f4184a52a869f54d72a3f1ec120482dc42e7406da52e15c496bc81eb0ff2f4';let _src;

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
