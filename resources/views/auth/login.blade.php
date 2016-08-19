@extends('layouts.login')

@section('content')
    <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-card mdl-shadow--2dp employer-form" action="#">

            <div class="mdl-card__title">
                <h2>Login</h2>
            </div>

            <div class="mdl-card__supporting-text">
                <form action="{{url('/login')}}" method="post" class="form">
                    {{ csrf_field() }}
                    <div class="form__article">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input type="text" id="Email" class="mdl-textfield__input" name="email" value="{{old('email')}}" required>
                                <label for="Email" class="mdl-textfield__label">Email</label>
                                @if ($errors->has('email'))
                                <span class="ada-error">
                                {{ $errors->first('email') }}
                                </span>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="form__article">
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input type="password" id="Password" class="mdl-textfield__input" name="password" value="{{old('password')}}" required>
                                <label for="Password" class="mdl-textfield__label">Password</label>
                                @if ($errors->has('password'))
                                    <span class="ada-error">
                                {{ $errors->first('password') }}
                                </span>
                                @endif
                            </div>
                        </div>
                    </div>

                    <div class="form__action">

                        <button id="submit_button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Login
                        </button>
                        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="isInfoReliable">
                            <input type="checkbox" id="isInfoReliable" name="remember" class="mdl-checkbox__input" />
                            <span class="mdl-checkbox__label">Rember me</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </main>

@endsection
